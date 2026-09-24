const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ===== ANIMASI SAAT SCROLL =====

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


// ===== EFEK KETIK NAMA =====

const nameText = "Deri Setiawan";
const nameElement = document.querySelector(".hero h1 span");

if (nameElement) {
    nameElement.textContent = "";

    let i = 0;

    function typeName() {
        if (i < nameText.length) {
            nameElement.textContent += nameText.charAt(i);
            i++;

            setTimeout(typeName, 120);
        }
    }

    typeName();
}


// ===== DARK / LIGHT MODE =====

const themeButton = document.createElement("button");

themeButton.innerHTML = "🌙";
themeButton.className = "theme-button";
themeButton.title = "Ganti tema";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.innerHTML = "☀️";
    } else {
        themeButton.innerHTML = "🌙";
    }
});


// ===== TOMBOL KEMBALI KE ATAS =====

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topButton.classList.add("show-top");
    } else {
        topButton.classList.remove("show-top");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== PARTIKEL =====

for (let i = 0; i < 25; i++) {
    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration =
        5 + Math.random() * 8 + "s";

    document.body.appendChild(particle);
}// ===== KARTU 3D =====

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    });
});


// ===== EASTER EGG PAUS =====

let whaleClicks = 0;

document.querySelectorAll(".whale, .big-whale").forEach(whale => {

    whale.addEventListener("click", () => {

        whaleClicks++;

        if (whaleClicks >= 5) {

            whaleClicks = 0;

            const secret = document.createElement("div");

            secret.className = "secret-message";

            secret.innerHTML = `
                <h3>🐋 Rahasia Ditemukan!</h3>
                <p>
                    Kamu berhasil menemukan rahasia
                    kecil di website Deri. 🌊✨
                </p>
                <button class="secret-close">
                    Tutup
                </button>
            `;

            document.body.appendChild(secret);

            setTimeout(() => {
                secret.classList.add("active");
            }, 50);

            secret.querySelector(".secret-close")
                .addEventListener("click", () => {

                    secret.classList.remove("active");

                    setTimeout(() => {
                        secret.remove();
                    }, 400);
                });
        }
    });
});
