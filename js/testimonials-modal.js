const reviewsData = {
    karim: {
        name: "Karim Radi",
        rating: 5,
        text: `After our experience with Aashi Group on several projects — including Le Grey Hotel in Downtown Beirut and numerous private villas — we can confidently say they are among the best and most professional scaffolding contractors. They consistently deliver their work with exceptional precision, attention to detail, and on-time execution.`,
        images: [
            "images/reviews_pic/karim1.jpg",
            "images/reviews_pic/karim2.jpg",
            "images/reviews_pic/karim3.jpg"
        ]
    },
    kevin: {
        name: "Kevin Gemayel",
        rating: 5,
        text: `Excellent work and support on the PORTSIDE project. Their team delivered and installed the scaffolding for our façade works with great professionalism, ensuring both safety and efficiency on site.

The installation was completed on schedule and in full compliance with safety standards, allowing our operations to proceed smoothly and without interruption. Their responsiveness and technical coordination were highly appreciated.`,
        images: [
            "images/reviews_pic/kevin1.jpg",
            "images/reviews_pic/kevin2.jpg",
            "images/reviews_pic/kevin3.jpg"
        ]
    },
    mohammad: {
        name: "Mohammad Sabbagh",
        rating: 5,
        text: `ACHI Scaffolding exceeded my expectations! Their customer support is outstanding—quick to respond, professional, and always ready to assist with any inquiries. The scaffolding itself is heavy-duty and extremely reliable, providing the durability and stability needed for even the most demanding projects. On top of that, their service is impressively fast, ensuring that everything is delivered and set up on time. Highly recommended for anyone looking for top-quality scaffolding solutions!`,
        images: [
            "images/reviews_pic/mohammad1.jpg",
            "images/reviews_pic/mohammad2.jpg",
            "images/reviews_pic/mohammad3.jpg"
        ]
    },
    michael: {
        name: "Michael Jibrine",
        rating: 5,
        text: `We recently collaborated with Achi Scaffolding on a highly complex project that involved constructing a 33-meter high steel cross.
From start to finish, their team demonstrated exceptional professionalism and punctuality. Whether it was the top management or the laborers on-site, everyone was committed to delivering top-notch service. Their expertise and dedication made a challenging project run smoothly.
We wouldn’t consider working with any other company for our scaffolding needs.

Highly recommended!`,
        images: [
            "images/reviews_pic/michael1.jpg",
            "images/reviews_pic/michael2.jpg",
            "images/reviews_pic/michael3.jpg",
            "images/reviews_pic/michael4.jpg"
        ]
    },
    wadih: {
        name: "Wadih Karkabi",
        rating: 5,
        text: `Dear Mr. Barbar Achi (Achi Group),
I am writing to express my heartfelt appreciation for your team's outstanding job in completing the project we entrusted to you. Your attention to detail, professionalism, and dedication to delivering excellence did not go unnoticed.
From the initial stages of planning to the final execution, your company demonstrated a level of expertise and skill that is truly commendable. The way your team worked together seamlessly and efficiently to ensure that every aspect of the project was handled in a perfect manner was truly impressive.
Not only did you meet our expectations, but you exceeded them in every way. The quality of your work speaks volumes about your commitment to excellence and customer satisfaction. We are thrilled with the end result and are grateful for the hard work and effort put forth by each member of your team.
In a competitive business environment, it is rare to find a company that consistently delivers exceptional service. Your company has certainly set the bar high, and we are grateful for the opportunity to work with such a dedicated and proficient team.
Thank you once again for your remarkable service. We look forward to the possibility of working together in the future and will not hesitate to recommend your company to others seeking top-tier service.
Warm regards,
Eng. Wadih Karkabi
Managing Director
Arch-Consult sarl.`,
        images: [
            "images/reviews_pic/wadih1.jpg",
            "images/reviews_pic/wadih2.jpg",
            "images/reviews_pic/wadih3.jpg",
            "images/reviews_pic/wadih4.png"
        ]
    },
    georges: {
        name: "Georges Homsi",
        rating: 5,
        text: `Accurate service! Clean workers! Professional attitude! We barely recall having an experience in scaffolding with such a professional team.
The villa was not in a construction phase. It is already inhabited. It is a very high end sensitive space. We needed to install the AC DUCTS. We were advised Achi group. Their workers highly respected the space and they were so involved in leaving the area clean and in delivering a very neat product. We highly recommend this company.
This experience with Achi group is to be repeated without any doubt. Thank you
GroundFloor0819
George and Fadi`,
        images: [
            "images/reviews_pic/georges1.jpg",
            "images/reviews_pic/georges2.jpg",
            "images/reviews_pic/georges3.jpg",
            "images/reviews_pic/georges4.jpg",
            "images/reviews_pic/georges5.jpg"
        ]
    },
    francois: {
        name: "Francois Efrem",
        rating: 5,
        text: `Thank you Achi group for providing us a great service of installing your scaffolding at our newly purchased villa in Daroun / Harissa (4 floors of steel scaffolding were installed)
Amazing service of professionalism and skilled technical team.
We highly recommend everyone dealing with you, for any required scaffolding rental.`,
        images: [
            "images/reviews_pic/Francois1.jpg",
            "images/reviews_pic/Francois2.jpg",
            "images/reviews_pic/Francois3.jpg",
            "images/reviews_pic/Francois4.jpg"
        ]
    },
    ziad: {
        name: "Ziad Bou Dagher",
        rating: 5,
        text: `Really appreciate the way u manage your business. Well done`,
        images: [
            "images/reviews_pic/ziad1.jpg",
            "images/reviews_pic/ziad2.jpg",
            "images/reviews_pic/ziad3.jpg",
            "images/reviews_pic/ziad4.jpg"
        ]
    },
    jad: {
        name: "Jad Issa",
        rating: 5,
        text: `Very professional and respectful team.
Highly recommended.`,
        images: [
            "images/reviews_pic/jad1.jpg"
        ]
    },
    mourad: {
        name: "Mourad Achkar",
        rating: 5,
        text: `Excellent service`,
        images: [
            "images/reviews_pic/mourad1.jpg"
        ]
    }
};

(function () {
    const modal = document.getElementById("testimonialModal");
    const modalName = modal.querySelector(".testi-modal-name");
    const modalRating = modal.querySelector(".testi-modal-rating");
    const modalText = modal.querySelector(".testi-modal-text");
    const modalImages = modal.querySelector(".testi-modal-images");
    const modalClose = modal.querySelector(".testi-modal-close");

    document.querySelectorAll(".testimonial-viewmore-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-review");
            const review = reviewsData[key];
            if (!review) return;

            modalName.textContent = review.name;
            modalRating.textContent = "★".repeat(review.rating);
            modalText.textContent = review.text;

            modalImages.innerHTML = "";
            review.images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = `Project photo by ${review.name}`;
                modalImages.appendChild(img);
            });

            modal.style.display = "flex";
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
})();
