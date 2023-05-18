// ປ້າຍໂຄສະນາ ເມື່ອ ຄຣິກໃສ່ປຸ່ມ next ໃຫ້ slider ຮູບຕໍ່ໄປ
let slideIndex = 1;
showSlide(slideIndex);

function nextSlide() {
  showSlide((slideIndex += 1));
}

function prevSlide() {
  showSlide((slideIndex -= 1));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slider-image");
  const buttons = document.getElementsByClassName("slider-button");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slides[slideIndex - 1].style.opacity = 1;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  buttons[slideIndex - 1].classList.add("active");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var hero = document.getElementById("hero");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    hero.classList.add("active");
  } else {
    hero.classList.remove("active");
  }
}

// ຄຣິກໃຫ້ສະແດງ ເມນູ
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
