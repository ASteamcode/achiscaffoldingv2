document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");
  if (!headerContainer) return;

  // STOP fetch on homepage if header is static
  if (headerContainer.dataset.static === "true") return;

  fetch("partials/header.html")
    .then(res => {
      if (!res.ok) throw new Error("Header not found");
      return res.text();
    })
    .then(html => {
      headerContainer.innerHTML = html;
      initMobileMenu();
    })
    .catch(err => console.error("Header load failed:", err));
});

function initMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-links a");

  if (!navToggle || !mobileMenu || !mobileClose) return;

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  });

  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
    document.body.style.height = "";
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
      document.body.style.height = "";
    });
  });
}
