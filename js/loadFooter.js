document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (!footerContainer) return;

  const base = window.location.hostname.includes("github.io")
    ? "/Achi_Internship"
    : "";

  fetch(`${base}/partials/footer.html`)
    .then(res => res.text())
    .then(html => {
      footerContainer.innerHTML = html;
    })
    .catch(err => console.error("Footer load failed:", err));
});
