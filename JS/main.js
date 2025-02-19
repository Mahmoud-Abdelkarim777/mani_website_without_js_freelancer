$(document).ready(function(){
    $('.responsive-customs').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 300,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
            cssEase: 'linear',
            rtl: true, // direction
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 9,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                }
            ]
    });
});



// Function to animate counter with Arabic numeral support
function animateCounter(element, start, end, duration) {
    let current = start;
    const increment = Math.ceil((end - start) / (duration / 50)); // Step size
    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(interval);
        }
        // Convert number to Arabic numerals
        const arabicNumber = current.toLocaleString("ar-EG", { useGrouping: false });
        element.textContent = arabicNumber; // Update the element
    }, 50); // Update every 10ms
}

// Function to convert Arabic numerals to English numerals
function convertArabicToEnglishNumber(arabicNumber) {
    return parseInt(
        arabicNumber.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );
}

// Select all elements with the class 'num'
document.querySelectorAll('.num').forEach((numElement) => {
    // Get the final value in English numerals
    const endValue = convertArabicToEnglishNumber(numElement.textContent.trim());
    numElement.textContent = "٠"; // Set initial value to 0 (Arabic numeral)
    animateCounter(numElement, 0, endValue, 2000); // Animate to the final value over 2 seconds
});





 // Function to type text letter by letter
 function typeText(element, text, delay = 100, callback = null) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
        } else {
            clearInterval(interval);
            if (callback) callback(); // Call the next function if provided
        }
    }, delay);
}

// Select the elements
const heroTitleElement = document.getElementById("hero-title");
const heroSubtitleElement = document.getElementById("hero-subtitle");

// The text to type
const heroTitleText = "نقف بجانبك بوعيٍ قانونيٍ راسخ";
const heroSubtitleText = "لنضمن لك حقوقك";

// Start typing animation
typeText(heroTitleElement, heroTitleText, 40, () => {
    typeText(heroSubtitleElement, heroSubtitleText, 100);
});