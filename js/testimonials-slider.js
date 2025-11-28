document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".testi-track");
    const original = Array.from(document.querySelectorAll(".testimonial-item"));
    const dots = Array.from(document.querySelectorAll(".testi-dots li"));

    const total = original.length;

    // --- 1️⃣ CLONE BEFORE (last 3) + AFTER (first 3) ---
    const clonesBefore = original.slice(-3).map(el => el.cloneNode(true));
    const clonesAfter  = original.slice(0, 3).map(el => el.cloneNode(true));

    clonesBefore.forEach(el => track.prepend(el));
    clonesAfter.forEach(el => track.append(el));

    // ALL SLIDES after cloning
    const all = Array.from(document.querySelectorAll(".testimonial-item"));

    let index = 3;  // first REAL slide
    let itemWidth = 0;
    const gap = 40;
    let auto;

    /* --------------------------------------------------
       ⭐ SHIFT FIX → ensures center slide is VISUALLY center
       TRANSFORM = -(index * width) + width
       -------------------------------------------------- */
    function applyTransform() {
        track.style.transform =
            `translateX(calc(${-itemWidth * index}px + ${itemWidth}px))`;
    }

    // Update slide width
    function updateSizes() {
        itemWidth = all[0].offsetWidth + gap;
        track.style.transition = "none";
        applyTransform();
    }

    // Highlight proper center + dots
    function highlightCenter() {
        all.forEach(el => el.classList.remove("center"));

        const realIndex = (index - 3 + total) % total;

        all[index].classList.add("center");

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === realIndex);
        });
    }

    // Move forward
    function slideNext() {
        index++;
        track.style.transition = "0.6s ease";
        applyTransform();

        setTimeout(() => {
            if (index === total + 3) {
                // Jump to first real slide (no animation)
                track.style.transition = "none";
                index = 3;
                applyTransform();
            }
            highlightCenter();
        }, 620);
    }

    // Move to a dot
    function slideToDot(i) {
        index = i + 3;
        track.style.transition = "0.6s ease";
        applyTransform();
        highlightCenter();
    }

    // Dot click events
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            slideToDot(i);
            resetAuto();
        });
    });

    // Auto play loop
    function startAuto() {
        auto = setInterval(slideNext, 2500);
    }
    function resetAuto() {
        clearInterval(auto);
        startAuto();
    }

    // Window resize update
    window.addEventListener("resize", updateSizes);

    // INIT
    updateSizes();
    highlightCenter();
    startAuto();
});
