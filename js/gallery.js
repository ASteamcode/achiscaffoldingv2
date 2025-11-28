// GALLERY.JS — handles lightbox for gallery images

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;

  const lightboxImage = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const backdrop = lightbox.querySelector(".lightbox-backdrop");
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Open lightbox
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    // Optional: small timeout before clearing src to avoid flash
    setTimeout(() => {
      lightboxImage.src = "";
    }, 150);
  }

  // Close on button
  closeBtn.addEventListener("click", closeLightbox);

  // Close on clicking backdrop
  backdrop.addEventListener("click", closeLightbox);

  // Close on ESC key
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
});
