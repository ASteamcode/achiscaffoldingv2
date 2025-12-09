document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (!footerContainer) return;

  fetch("partials/footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Footer not found");
      return res.text();
    })
    .then(html => {
      footerContainer.innerHTML = html;
    })
    .catch(err => console.error("Footer load failed:", err));
});
