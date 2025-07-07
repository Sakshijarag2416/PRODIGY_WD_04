// script.js

// Navbar scroll effect (optional for future enhancement)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.style.backgroundColor = "rgba(0,0,0,0.9)";
    header.style.transition = "0.4s ease";
  } else {
    header.style.backgroundColor = "rgba(255,255,255,0.05)";
  }
});
