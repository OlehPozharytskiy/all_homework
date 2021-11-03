const swiper = new Swiper(".image-slider", {
  // Стрілки
  navigation: {
    nextEl: "#js-swiper-next",
    prevEl: "#js-swiper-prev",
  },

  //кількість слайдів
  slidesPerView: 4.6,

  // стандартно
  // effect: "slide",

  // фейд тільки 1 слайд
  // effect: "fade",
  // додаткові налаштування прозорість
  // fadeEffect: {
  //   crossFade: true,
  // },

  // effect: "flip",
  // додаткові налаштування
  // flipEffect: {
  //   slideShadows: true,
  //   limitRotation: true,
  // },

  // effect: "cube",
  // додаткові налаштування
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // effect: "coverflow",
  // додаткові налаштування
  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },

  // центрування головного слайду
  // centeredSlides: true,

  // кількість слайдів які можна перегорнути за один раз
  // slidesPerGroup: 3,

  // відступи між слайдами
  spaceBetween: 5,

  // луп не працює разом з скролбаром коректно
  loop: false,

  pagination: {
    el: ".swiper-pagination",

    // булети під картинками
    // type: "bullets",
    // clickable: true,
    // dynamicBullets: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },

    // Фракції

    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        'Слайд <span class="' +
        currentClass +
        '"></span>' +
        " з " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },

    // прогрес бар зверху
    // type: "progressbar",
  },

  // Скролл
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
    dragSize: 200,
  },

  // перетаскування мишкою картинок на пк
  simulateTouch: true,

  // курсор перетягування
  grabCursor: true,

  // керування через клавіатуру
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  // управління мишкою
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".image-slider",
  },

  // автовисота слайдера по відношенню до картинок, якщо вони різні по висоті
  // autoHeight: true,

  // автопрокрутка
  autoplay: {
    delay: 1000,
    // вимкнення на останньому слайді
    stopOnLastSlide: true,
    // при втручанні при тру вимкнення
    disableOnInteraction: false,
  },

  // Скорость
  speed: 500,

  // вертикальний слайдер
  // direction: "vertical",

  // адаптив брейк поінти
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },

  // зум при двойному кліку на картинці в межах блока
  //(не юзабельно для масивів картинок) також додатно класс в обгортці картинки
  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },

  // підгрузка картинок для коректної роботи додано 2 класи
  //в дата виненсено срсі
  preloadImages: false,
  lazy: {
    loadOnTransitiononStart: true,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
});
