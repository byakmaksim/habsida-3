const slider = document.querySelector(".slider-container");
const dotsContainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".slide");

// Создаём точки
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots span");

// Отслеживаем прокрутку
slider.addEventListener("scroll", () => {
  // 1. Точный расчет ширины слайда (включая gap)
  const slideWidth = document.querySelector(".slide").clientWidth + 20;

  // 2. Расчет индекса текущего слайда
  const index = Math.round(slider.scrollLeft / slideWidth);

  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
});

slider.addEventListener("scroll", () => {
  const slideWidth = document.querySelector(".slide").clientWidth + 20; // 20px - ваш gap
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  const scrollPos = slider.scrollLeft;

  // Рассчитываем индекс с учетом "недокрута" последнего элемента
  let index;
  if (scrollPos >= maxScroll - slideWidth / 2) {
    // Если близко к концу - принудительно последний слайд
    index = dots.length - 1;
  } else {
    // Обычный расчет для остальных случаев
    index = Math.round(scrollPos / slideWidth);
  }

  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
});
//"показать все"
const moreButton = document.querySelector(".more");
const sliderTrack = document.querySelector(".slider-track");

if (moreButton && sliderTrack && window.innerWidth >= 784) {
  moreButton.addEventListener("click", function () {
    sliderTrack.classList.toggle("expanded");
    this.classList.toggle("active");

    if (sliderTrack.classList.contains("expanded")) {
      this.innerHTML = '<img src="image/expand.svg" alt="">скрыть';
    } else {
      this.innerHTML = '<img src="image/expand.svg" alt="">показать все';
    }
  });
}
