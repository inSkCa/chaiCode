document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("aside nav ul li a");
    const cardsContent = document.querySelectorAll(".cards-content .card");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetContent = this.getAttribute("data-content");

            // Show the relevant content and hide the others
            cardsContent.forEach(card => {
                if (card.id === targetContent) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            // Remove the active class from all links and add it to the clicked one
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
