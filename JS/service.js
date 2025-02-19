
    document.getElementById("searchInput").addEventListener("keyup", function() {
        let input = this.value.toLowerCase();
        let cards = document.querySelectorAll(".card");
        
        cards.forEach(card => {
            let cardText = card.innerText.toLowerCase();
            if (cardText.includes(input)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });

    /*move arrow*/
    function toggleChevron(button) {
    const icon = button.querySelector("i"); 
    icon.classList.toggle("rotate"); 
}
