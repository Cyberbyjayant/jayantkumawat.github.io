// Fade-in animation

const cards = document.querySelectorAll(
'.stat-card, .card, .project-card, .trust-grid div'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);

});

// Dynamic year in footer (optional)

const footer = document.querySelector("footer p");

if(footer){
    footer.innerHTML =
    `© ${new Date().getFullYear()} Jayant Kumawat | Enterprise Cybersecurity Professional`;
}
const text = "JAYANT KUMAWAT";

let i = 0;

function typeEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeEffect,120);
    }
}

typeEffect();
