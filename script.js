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
}
