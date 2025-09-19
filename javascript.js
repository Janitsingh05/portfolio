
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");

  carousel.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");
  
  if (toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});

    document.getElementById('year').textContent = new Date().getFullYear();
  





