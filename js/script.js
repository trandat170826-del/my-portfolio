
// =====================================
// 1. DARK MODE / LIGHT MODE
// =====================================

const themeToggle = document.getElementById("themeToggle");

// Lấy giao diện đã lưu
const savedTheme = localStorage.getItem("theme");

// Kiểm tra giao diện hiện tại
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Sự kiện chuyển đổi giao diện
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }

});


// =====================================
// 2. MENU RESPONSIVE
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mở hoặc đóng menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Đóng menu sau khi chọn đường dẫn
document.querySelectorAll(".nav-menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// 3. ANIMATION KHI CUỘN TRANG
// INTERSECTION OBSERVER
// =====================================

const revealElements = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

// Theo dõi các phần tử
revealElements.forEach(function (element) {

    observer.observe(element);

});


// =====================================
// 4. XỬ LÝ ẢNH BỊ THIẾU
// =====================================

document.querySelectorAll("img").forEach(function (img) {

    img.addEventListener("error", function () {

        img.style.display = "none";

    });

});
