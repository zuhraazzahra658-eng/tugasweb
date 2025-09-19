// Ambil elemen hamburger dan navbar-nav
const hamburger = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

// Toggle class 'active' saat hamburger diklik
hamburger.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

// Klik di luar navbar-nav dan hamburger akan menutup menu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});