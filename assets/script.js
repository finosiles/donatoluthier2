// Script para abrir/cerrar el menú en móvil




const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const slider = document.getElementById("slider");
  const slides = slider.children;
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("bg-white"));
    dots[index].classList.add("bg-white");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  }

  // Auto Play
  let autoplay = setInterval(nextSlide, 4000);

  // Buttons Controls
  nextBtn.onclick = () => {
    nextSlide();
    restartAutoplay();
  };
  prevBtn.onclick = () => {
    prevSlide();
    restartAutoplay();
  };

  // Dots Controls
  dots.forEach((dot, i) => {
    dot.onclick = () => {
      index = i;
      updateSlider();
      restartAutoplay();
    };
  });

  function restartAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 4000);
  }

  updateSlider();