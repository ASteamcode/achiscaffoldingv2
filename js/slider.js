// ================= HERO SLIDER SCRIPT ===================

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        let prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    });
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.slide);
        showSlide(index);
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    if (!slides.length) return;
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}, 5000);
