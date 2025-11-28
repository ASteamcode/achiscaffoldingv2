// document.addEventListener("DOMContentLoaded", () => {
//     const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

//     const cards = document.querySelectorAll(".simple-blog-card");

//     cards.forEach(card => {
//         const index = parseInt(card.getAttribute("data-date-index")); 
//         const date = new Date();
//         date.setDate(date.getDate() - index);

//         const day = card.querySelector(".day");
//         const month = card.querySelector(".month");

//         day.textContent = String(date.getDate()).padStart(2, '0'); 
//         month.textContent = monthNames[date.getMonth()];
//     });
// });
document.addEventListener("DOMContentLoaded", () => {

    const dateContainers = document.querySelectorAll(".auto-date");

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const baseDate = new Date();

    dateContainers.forEach((badge, index) => {
        const date = new Date();
        date.setDate(baseDate.getDate() - index); // today, yesterday, 2 days ago

        const day = date.getDate().toString().padStart(2, "0");
        const month = months[date.getMonth()];

        const dayEl = badge.querySelector(".day");
        const monthEl = badge.querySelector(".month");

        if (dayEl) dayEl.textContent = day;
        if (monthEl) monthEl.textContent = month;
    });

});
