document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".testi-track");
    const original = Array.from(document.querySelectorAll(".testimonial-item"));
    const dots = Array.from(document.querySelectorAll(".testi-dots li"));
    const prevBtn = document.querySelector(".testi-prev");
    const nextBtn = document.querySelector(".testi-next");

    const total = original.length;

    const clonesBefore = original.slice(-3).map(el => el.cloneNode(true));
    const clonesAfter  = original.slice(0, 3).map(el => el.cloneNode(true));

    clonesBefore.forEach(el => track.prepend(el));
    clonesAfter.forEach(el => track.append(el));

    const all = Array.from(document.querySelectorAll(".testimonial-item"));

    let index = 3;  
    let itemWidth = 0;
    const gap = 40;
    let auto;

    function applyTransform() {
        track.style.transform =
            `translateX(calc(${-itemWidth * index}px + ${itemWidth}px))`;
    }

    function updateSizes() {
        itemWidth = all[0].offsetWidth + gap;
        track.style.transition = "none";
        applyTransform();
    }

    function highlightCenter() {
        all.forEach(el => el.classList.remove("center"));

        const realIndex = (index - 3 + total) % total;

        all[index].classList.add("center");

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === realIndex);
        });
    }

    function slideNext() {
        index++;
        track.style.transition = "0.6s ease";
        applyTransform();

        setTimeout(() => {
            if (index === total + 3) {
                track.style.transition = "none";
                index = 3;
                applyTransform();
            }
            highlightCenter();
        }, 620);
    }

    function slidePrev() {
        index--;
        track.style.transition = "0.6s ease";
        applyTransform();

        setTimeout(() => {
            if (index === 2) {
                track.style.transition = "none";
                index = total + 2;
                applyTransform();
            }
            highlightCenter();
        }, 620);
    }

    function slideToDot(i) {
        index = i + 3;
        track.style.transition = "0.6s ease";
        applyTransform();
        highlightCenter();
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            slideToDot(i);
            resetAuto();
        });
    });

    function startAuto() {
        auto = setInterval(slideNext, 2500);
    }
    function resetAuto() {
        clearInterval(auto);
        startAuto();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            slideNext();
            resetAuto();
        });
        nextBtn.addEventListener("touchend", (e) => {
            e.preventDefault();
            slideNext();
            resetAuto();
        }, { passive: false });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            slidePrev();
            resetAuto();
        });
        prevBtn.addEventListener("touchend", (e) => {
            e.preventDefault();
            slidePrev();
            resetAuto();
        }, { passive: false });
    }

    window.addEventListener("resize", updateSizes);

    updateSizes();
    highlightCenter();
    startAuto();
});
