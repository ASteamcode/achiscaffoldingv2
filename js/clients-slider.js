// js/clients-slider.js
(function() {
  const track = document.querySelector(".clients-slider .slide-track");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll(".client-logo"));
  const dotsContainer = document.querySelector(".home-clients .slider-dots");

  // if no slides or single slide, do nothing
  if (slides.length <= 1) {
    dotsContainer.style.display = "none";
    return;
  }

  // create dots
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = (i === 0 ? "dot active" : "dot");
    d.setAttribute("aria-label", `Go to client ${i + 1}`);
    d.dataset.index = i;
    dotsContainer.appendChild(d);
  });

  const dots = Array.from(dotsContainer.querySelectorAll(".dot"));

  // compute slide width (distance to move per step)
  function getSlideStep() {
    const computedStyle = window.getComputedStyle(slides[0]);
    const marginRight = parseFloat(computedStyle.marginRight) || 0;
    return Math.round(slides[0].offsetWidth + marginRight);
  }

  let index = 0;
  let intervalId = null;
  const AUTOPLAY_MS = 2500;

  function goTo(i) {
    const step = getSlideStep();
    track.style.transform = `translateX(-${i * step}px)`;
    dots.forEach(d => d.classList.remove("active"));
    if (dots[i]) dots[i].classList.add("active");
    index = i;
  }

  function next() {
    index = (index + 1) % slides.length;
    goTo(index);
  }

  function startAuto() {
    stopAuto();
    intervalId = setInterval(next, AUTOPLAY_MS);
  }

  function stopAuto() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // dot click handlers
  dots.forEach(d => {
    d.addEventListener("click", () => {
      const i = parseInt(d.dataset.index, 10);
      goTo(i);
      startAuto(); // restart timer
    });
  });

  // pause on hover/focus
  const slider = document.querySelector(".clients-slider");
  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);
  slider.addEventListener("focusin", stopAuto);
  slider.addEventListener("focusout", startAuto);

  // recompute on resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    // small debounce
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      goTo(index); // reapply transform using recalculated step
    }, 120);
  });

  // initialize
  track.style.transition = "transform 0.6s cubic-bezier(.2,.9,.2,1)";
  track.style.willChange = "transform";
  startAuto();
})();
