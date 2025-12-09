document.addEventListener("DOMContentLoaded", function () {
    const IMAGES = [
        "images/gallery/0W0A1233.JPG",
        "images/gallery/1.jpg",
        "images/gallery/3.jpg",
        "images/gallery/4.jpg",
        "images/gallery/5.jpg",
        "images/gallery/6.jpg",
        "images/gallery/7.jpg",
        "images/gallery/8.jpg",
        "images/gallery/9.jpg",
        "images/gallery/10.jpg",
        "images/gallery/11.jpg",
        "images/gallery/12.jpg",
        "images/gallery/13.jpg",
        "images/gallery/14.jpg",
        "images/gallery/15.jpg",
        "images/gallery/16.jpg",
        "images/gallery/17.jpg",
        "images/gallery/19.jpg",
        "images/gallery/20.jpg",
        "images/gallery/21.jpg",
        "images/gallery/22.jpg",
        "images/gallery/23.jpg",
        "images/gallery/24.jpg",
        "images/gallery/26.jpg",
        "images/gallery/27.jpg",
        "images/gallery/28.jpg",
        "images/gallery/30.jpg",
        "images/gallery/31.jpg",
        "images/gallery/32.jpg",
        "images/gallery/G1.webp",
        "images/gallery/G2.webp",
        "images/gallery/G3.webp",
        "images/gallery/G4.webp",
        "images/gallery/G5.webp",
        "images/gallery/G6.webp",
        "images/gallery/G7.webp",
        "images/gallery/G8.webp",
        "images/gallery/G9.webp",
        "images/gallery/G10.webp",
        "images/gallery/G11.webp",
        "images/gallery/G12.webp",
        "images/gallery/G13.webp",
        "images/gallery/G14.webp",
        "images/gallery/G15.webp",
        "images/gallery/G16.webp",
        "images/gallery/G17.webp",
        "images/gallery/G18.jpeg",
        "images/gallery/G19.jpeg",
        "images/gallery/G20.jpeg",
        "images/gallery/124553811_724242481518321_2860198893114815692_n copy.jpg",
        "images/gallery/131335709_745181546091081_9030796893974946614_n.jpg",
        "images/gallery/20819369_135108873765021_8187137705964148355_o (1) copy.jpg",
        "images/gallery/21366849_140088179933757_8163962528685330959_o.jpg",
        "images/gallery/253213619_932964847312749_3737623131019213491_n.jpg",
        "images/gallery/259513852_941702983105602_5165317443361113593_n.jpg",
        "images/gallery/277806325_1024566231485943_3578252931848770518_n (2).jpg",
        "images/gallery/291325225_1079483295994236_1324654144776147872_n.jpg",
        "images/gallery/327882636_1824634337908419_4776560427938409227_n (1).jpg",
        "images/gallery/42090073_284486698827237_2692390602724605952_n copy.jpg",
        "images/gallery/Entrance-protection-scaled.jpg",
        "images/gallery/Facade-scaffolding-option-1-1.jpg",
        "images/gallery/Hangingscaffolding-1024x768.jpg",
        "images/gallery/Home Banner 1.JPG",
        "images/gallery/Home Banner 4.jpg",
        "images/gallery/Home Banner 5.JPG",
        "images/gallery/Home banner 6.jpg",
        "images/gallery/Home banner 7.JPG",
        "images/gallery/Home banner 8.JPG",
        "images/gallery/ACHI-scaffolding.jpg",
        "images/gallery/our-mission-1.jpg",
        "images/gallery/Project-4Platform-1024x768.jpg",
        "images/gallery/Projet-3-Saint-George-Hospital-1024x768.jpg",
        "images/gallery/rental-per-piecepg-1-819x1024.jpg",
        "images/gallery/scaffolding for indoor spaces.jpg",
        "images/gallery/Scaffolding installation for renewable energy projects.jpg",
        "images/gallery/1cbd4530-11ea-4edb-8fb4-3c35cd87dd71 2.JPG",
        "images/gallery/1f02ece1-0364-4505-8d01-85225135699a.JPG",
        "images/gallery/2a5ae51a-33c5-410e-b03e-f3fb48c69675.JPG",
        "images/gallery/2c5d7506-1af6-45bc-b85f-34fe017c874b.JPG",
        "images/gallery/2ec2c8f4-e8c9-46ee-be6d-1dcfdd09dac1.JPG",
        "images/gallery/374b5d84-5d65-487c-8617-3e95def1f80f.JPG",
        "images/gallery/473737fb-1e48-40f4-ab29-ad87f1939d51.JPG",
        "images/gallery/76dd0c66-399f-424f-bb9b-2ce07b8e1c91.JPG",
        "images/gallery/79DB6A60-3D2B-4299-B7C3-FCB6E70D3AAF.JPG",
        "images/gallery/7c251864-7164-4af2-b702-22e112bc685c.JPG",
        "images/gallery/84d1228b-e982-49c4-ad41-d8c83fd86d0c 2.JPG",
        "images/gallery/9ba61ac8-cd07-4036-8cbb-f9124795dcb0 3.JPG",
        "images/gallery/9c9d3d26-4d69-43ab-a147-d543da02d39c.JPG",
        "images/gallery/aaae0c25-f9eb-4f57-8a1d-76ef36d81598 2.JPG",
        "images/gallery/bb669fda-7456-47ed-8538-8cb6f7c05121.JPG",
        "images/gallery/d2841aa2-85cc-4876-93e8-74bef626072d.JPG",
        "images/gallery/d637ebf9-6943-4b09-9803-bdc9566a0a2f.JPG",
        "images/gallery/db4bbea0-8bdf-4289-93b5-0434c0ab6d3e.JPG",
        "images/gallery/DBAYEH.JPG",
        "images/gallery/E7AF2CAC-8AC8-43E3-A07E-A510C47FDD96 2.JPG",
        "images/gallery/ef0488ee-3200-4467-b15d-d0a35fc05c97.JPG",
        "images/gallery/f4b21edb-ec3b-482a-a269-2f778d546614.JPG",
        "images/gallery/SDC10232.JPG",
        "images/gallery/SDC10782.JPG",
        "images/gallery/SDC10964.JPG",
        "images/gallery/SDC13567.JPG",
        "images/gallery/SDC13574.JPG",
        "images/gallery/SDC14423.JPG",
        "images/gallery/SDC14429.JPG",
        "images/gallery/SDC14885.JPG",
        "images/gallery/SDC15653.JPG",
        "images/gallery/SDC15659.JPG",
        "images/gallery/SDC16292.JPG",
        "images/gallery/SDC16336.JPG",
        "images/gallery/SDC16385.JPG",
        "images/gallery/SDC16387.JPG",
        "images/gallery/SDC16389.JPG",
        "images/gallery/SDC16393.JPG",
        "images/gallery/SDC16397.JPG",
        "images/gallery/SDC17576.JPG",
        "images/gallery/SDC17669.JPG",
        "images/gallery/SDC17670.JPG",
        "images/gallery/SDC17890.JPG",
        "images/gallery/SDC17892.JPG",
        "images/gallery/SDC17897.JPG",
        "images/gallery/SDC18801.JPG",
        "images/gallery/SDC18816.JPG",
        "images/gallery/SDC18858.JPG",
        "images/gallery/SDC18990.JPG",
        "images/gallery/SDC19252.JPG",
        "images/gallery/SDC19539.JPG",
        "images/gallery/SDC19889.JPG",
        "images/gallery/WhatsApp Image 2022-11-24 at 9.29.49 PM (2).jpeg",
        "images/gallery/WhatsApp Image 2022-11-24 at 9.29.49 PM.jpeg",
        "images/gallery/WhatsApp Image 2022-11-24 at 9.29.50 PM (1) (1).jpeg",
        "images/gallery/WhatsApp Image 2022-11-24 at 9.30.28 PM.jpeg",
        "images/gallery/WhatsApp Image 2022-11-24 at 9.38.48 PM (3) (1).jpeg",
        "images/gallery/WhatsApp Image 2023-01-05 at 8.25.30 AM.jpeg",
        "images/gallery/WhatsApp Image 2023-01-05 at 9.28.18 AM (5) (1).jpeg",
        "images/gallery/WhatsApp Image 2023-01-05 at 9.28.21 AM.jpeg",
        "images/gallery/WhatsApp Image 2023-01-05 at 9.28.22 AM.jpeg",
        "images/gallery/IMG_0272.jpg",
        "images/gallery/IMG_0273.jpg",
        "images/gallery/IMG_0274.jpg",
        "images/gallery/IMG_0275.jpg",
        "images/gallery/IMG_2170.JPG",
        "images/gallery/IMG_2172.JPG",
        "images/gallery/IMG_2173.JPG",
        "images/gallery/IMG_2174.JPG",
        "images/gallery/IMG_2175.JPG",
        "images/gallery/IMG_2176.JPG",
        "images/gallery/IMG_2177.JPG",
        "images/gallery/IMG_2178.JPG",
        "images/gallery/IMG_2179.JPG",
        "images/gallery/IMG_2180.JPG",
        "images/gallery/IMG_2181.JPG",
        "images/gallery/IMG_2182.JPG",
        "images/gallery/IMG_2184.JPG",
        "images/gallery/IMG_2185.JPG",
        "images/gallery/IMG_2187.JPG",
        "images/gallery/IMG_2188.JPG",
        "images/gallery/IMG_2191.JPG",
        "images/gallery/IMG_2192.JPG",
        "images/gallery/IMG_2193.JPG",
        "images/gallery/IMG_2194.JPG",
        "images/gallery/IMG_2195.JPG",
        "images/gallery/IMG_2196.JPG",
        "images/gallery/IMG_2197.JPG",
        "images/gallery/IMG_2199.JPG",
        "images/gallery/IMG_5889.JPG",
        "images/gallery/IMG_5891.JPG",
        "images/gallery/Centre sofil.zip - 9.PNG",
        "images/gallery/Centre sofil.zip - 10.PNG",
        "images/gallery/Centre sofil.zip - 11.PNG",
        "images/gallery/20230912_165441000_iOS.jpg",
        "images/gallery/20230918_132318003_iOS.jpg",
        "images/gallery/20230918_132318522_iOS.jpg"
    ];

    const grid = document.getElementById("galleryGrid");
    const paginationWrapper = document.querySelector(".gallery-pagination");
    const pageNumbersContainer = document.querySelector(".gallery-page-numbers");
    const prevBtn = document.querySelector(".gallery-page-btn.prev");
    const nextBtn = document.querySelector(".gallery-page-btn.next");

    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = lightbox ? lightbox.querySelector("img") : null;
    const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;
    const lightboxBackdrop = lightbox ? lightbox.querySelector(".lightbox-backdrop") : null;

    const PER_PAGE = 39;
    let currentPage = 1;
    const totalPages = Math.ceil(IMAGES.length / PER_PAGE);

    function renderPage(page) {
        currentPage = page;
        grid.innerHTML = "";

        const startIndex = (page - 1) * PER_PAGE;
        const endIndex = Math.min(startIndex + PER_PAGE, IMAGES.length);
        const currentSlice = IMAGES.slice(startIndex, endIndex);

        currentSlice.forEach((src, idx) => {
            const item = document.createElement("div");
            item.className = "gallery-item";

            const img = document.createElement("img");
            img.src = src;
            img.alt = "Project image " + (startIndex + idx + 1);

            img.addEventListener("click", () => {
                openLightbox(src, img.alt);
            });

            item.appendChild(img);
            grid.appendChild(item);
        });

        updatePaginationButtons();
        renderPageNumbers();
    }

    function updatePaginationButtons() {
        if (!prevBtn || !nextBtn) return;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    function renderPageNumbers() {
        if (!pageNumbersContainer) return;

        pageNumbersContainer.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "gallery-page-number";
            if (i === currentPage) {
                btn.classList.add("active");
            }
            btn.textContent = i.toString();

            btn.addEventListener("click", () => {
                renderPage(i);
                scrollToTopOfGallery();
            });

            pageNumbersContainer.appendChild(btn);
        }
    }

    function scrollToTopOfGallery() {
        const section = document.querySelector(".gallery-section");
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                renderPage(currentPage - 1);
                scrollToTopOfGallery();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
                renderPage(currentPage + 1);
                scrollToTopOfGallery();
            }
        });
    }

    function openLightbox(src, alt) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || "Project image";
        lightbox.classList.add("open");
    }

    function closeLightbox() {
        if (!lightbox || !lightboxImg) return;
        lightbox.classList.remove("open");
        lightboxImg.src = "";
        lightboxImg.alt = "";
    }

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }
    if (lightboxBackdrop) {
        lightboxBackdrop.addEventListener("click", closeLightbox);
    }

    document.addEventListener("keydown", (e) => {
        if (lightbox && e.key === "Escape" && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });

    if (IMAGES.length > 0 && grid) {
        renderPage(1);
    }
});
