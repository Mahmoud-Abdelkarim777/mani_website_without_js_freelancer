//get all faq dynamicly
async function fetchFAQs() {
    try {
        // طلب الأسئلة من الـ API
        const response = await axios.get(
            "https://mani-production.up.railway.app/dashboard/faq"
        );

        if (response.status === 200) {
            const faqs = response.data.Data; // افترض أن البيانات موجودة تحت المفتاح "Data"
            const accordionContainer = document.getElementById("servicesAccordion");

            // تفريغ المحتوى الحالي للأكورديون
            accordionContainer.innerHTML = "";

            // تحديث الأكورديون بالمحتوى الجديد
            faqs.forEach((faq, index) => {
                const faqId = `faq${index + 1}`;
                const collapseId = `collapse${index + 1}`;
                const card = `
                    <div class="card">
                        <div class="card-header" id="${faqId}">
                            <h2 class="mb-0">
                                <button 
                                    class="accordion-button mb-4" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#${collapseId}" 
                                    aria-expanded="true" 
                                    aria-controls="${collapseId}" 
                                    onclick="toggleChevron(this)">
                                    ${faq.Question}
                                    <i class="fas fa-chevron-left"></i> 
                                </button>
                            </h2>
                        </div>
                        <div id="${collapseId}" class="collapse" aria-labelledby="${faqId}">
                            <div class="card-body">
                                <p>${faq.Answer}</p>
                            </div>
                        </div>
                    </div>
                `;

                // إضافة السؤال والإجابة إلى الأكورديون
                accordionContainer.insertAdjacentHTML("beforeend", card);
            });
        }
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: "حدث خطأ أثناء جلب الأسئلة. يرجى المحاولة مرة أخرى.",
            icon: "info",
            confirmButtonText: "حسنا",
        })
    }
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", fetchFAQs);


    /*arrow move*/
    function toggleChevron(button) {
    const icon = button.querySelector("i"); 
    icon.classList.toggle("rotate"); 
}




