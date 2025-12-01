function initMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}
