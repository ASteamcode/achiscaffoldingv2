document.addEventListener("DOMContentLoaded", function () {
    const projectImages = {
        "aishti-mall": [
            "images/workDone/AISHTI MALL - JAL EL DIB/0W0A1218.JPG",
            "images/workDone/AISHTI MALL - JAL EL DIB/0W0A1226 2.JPG",
            "images/workDone/AISHTI MALL - JAL EL DIB/edit.JPG",
            "images/workDone/AISHTI MALL - JAL EL DIB/Home Banner 5.JPG",
            "images/workDone/AISHTI MALL - JAL EL DIB/Home banner 6.jpg",
            "images/workDone/AISHTI MALL - JAL EL DIB/IMG_2189.JPG",
            "images/workDone/AISHTI MALL - JAL EL DIB/Project-4Platform-1024x768.jpg",
            "images/workDone/AISHTI MALL - JAL EL DIB/scaffolding for indoor spaces.jpg"
        ],
        "port-side-residential": [
            "images/workDone/PORT SIDE - BEIRUT/361641065_768035905323121_6701313797518833287_n.jpg",
            "images/workDone/PORT SIDE - BEIRUT/Home Banner 3.jpg"
        ],
        "beirut-business-center": [
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/Home banner 2.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17893.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17897.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17898.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17899 copy.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17899.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17900.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17901.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC19484.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC19485.JPG",
            "images/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC19487.JPG"
        ],
        "hotel-le-gray": [
            "images/workDone/HOTEL LE GRAY/IMG_2186.JPG"
        ],
        "hotel-albergo": [
            "images/workDone/HOTEL ALBERGO/IMG_2197.JPG"
        ],
        "abc-mall": [
            "images/workDone/ABC MALL/473737fb-1e48-40f4-ab29-ad87f1939d51.JPG",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (1).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (2).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (3).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (4).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30.jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (1).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (2).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (3).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (4).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (5).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (6).jpeg",
            "images/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (7).jpeg"
        ],
        "be-batroun": [
            "images/workDone/BE BATROUN/IMG_2183.JPG"
        ],
        "centre-sofil": [
            "images/workDone/CENTRE SOFIL - BEIRUT/18a0cebd-578e-43b6-bb54-8f27bfb2a48f 10.JPG",
            "images/workDone/CENTRE SOFIL - BEIRUT/18a0cebd-578e-43b6-bb54-8f27bfb2a48f 9.JPG",
            "images/workDone/CENTRE SOFIL - BEIRUT/722ef18b-3708-430b-a8e9-dc891928aaff 10.JPG",
            "images/workDone/CENTRE SOFIL - BEIRUT/722ef18b-3708-430b-a8e9-dc891928aaff 9.JPG",
            "images/workDone/CENTRE SOFIL - BEIRUT/8a182148-5e14-4ece-a93a-22ce7f354075 10.JPG",
            "images/workDone/CENTRE SOFIL - BEIRUT/8a182148-5e14-4ece-a93a-22ce7f354075 9.JPG",
            "images/workDone/CENTRE SOFIL - BEIRUT/Centre sofil.zip - 1.PNG"
        ],
        "credit-libanais-hq": [
            "images/workDone/CREDIT LIBANAIS HQ/62D2606F-BB19-47A1-85BA-E2B0DC8C7FCC.JPG",
            "images/workDone/CREDIT LIBANAIS HQ/E7AF2CAC-8AC8-43E3-A07E-A510C47FDD96.JPG"
        ],
        "damac-towers": [
            "images/workDone/DAMAC TOWERS/0f274807-0f97-472e-a538-ef3b51de2f96.JPG",
            "images/workDone/DAMAC TOWERS/8dae2217-585a-4bb7-a80f-d4d2bff99e70.JPG",
            "images/workDone/DAMAC TOWERS/9c9d3d26-4d69-43ab-a147-d543da02d39c.JPG",
            "images/workDone/DAMAC TOWERS/c9753dec-5328-4f0d-87f8-cff0712f05ea.JPG"
        ],
        "embassy-france": [
            "images/workDone/EMBASSY OF FRANCE/IMG_2198.JPG"
        ],
        "gema-center": [
            "images/workDone/GEMA CENTER/ed113f0d-c0ba-4642-b7c5-713530034d03 2.JPG"
        ],
        "hopital-saint-georges": [
            "images/workDone/HOPITAL SAINT GEORGES/Projet-3-Saint-George-Hospital-1024x768.jpg"
        ],
        "ndu-barsa": [
            "images/workDone/NDU BARSA/Centre sofil.zip - 7.PNG"
        ],
        "villa-audi": [
            "images/workDone/VILLA AUDI - BEIRUT/Centre sofil.zip - 15.PNG",
            "images/workDone/VILLA AUDI - BEIRUT/Centre sofil.zip - 4.PNG"
        ]
    };

    const viewMoreBtns = document.querySelectorAll(".view-more");
    const modals = document.querySelectorAll(".modal");
    const closeBtns = document.querySelectorAll(".close-btn");

    viewMoreBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const projectId = btn.getAttribute("data-project");
            const modal = document.getElementById(projectId + "-modal");
            if (!modal) return;

            const gallery = modal.querySelector(".modal-gallery");
            if (!gallery) return;

            const sources = projectImages[projectId];
            if (!sources || sources.length === 0) {
                gallery.innerHTML = "";
                modal.style.display = "block";
                return;
            }

            gallery.innerHTML = '<p class="modal-loading">Loading images...</p>';

            const titleElement = modal.querySelector("h3");
            const projectName = titleElement ? titleElement.textContent : "Project image";

            const imagePromises = sources.map(function (src) {
                return new Promise(function (resolve) {
                    const img = new Image();
                    img.onload = function () {
                        const area = img.naturalWidth * img.naturalHeight;
                        resolve({ src: src, area: area });
                    };
                    img.onerror = function () {
                        resolve({ src: src, area: 0 });
                    };
                    img.src = src;
                });
            });

            Promise.all(imagePromises).then(function (results) {
                results.sort(function (a, b) {
                    return b.area - a.area;
                });

                gallery.innerHTML = "";

                results.forEach(function (item) {
                    const imgEl = document.createElement("img");
                    imgEl.src = item.src;
                    imgEl.alt = projectName + " image";
                    gallery.appendChild(imgEl);
                });
            });

            modal.style.display = "block";
        });
    });

    closeBtns.forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
            const modal = closeBtn.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    window.addEventListener("click", function (event) {
        modals.forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
