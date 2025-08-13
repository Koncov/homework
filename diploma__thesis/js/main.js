(function () {


  //slider-promo
  const swiper = new Swiper('.slider-promo-mySwiper', {
    loop: true,
    direction: "horizontal",
    pagination: {
      el: ".slider-promo-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}" data-slide-number="${index + 1}"></span>`;
      },
    },

    breakpoints: {
      // when window width is >= 320px
      1024: {
        direction: "vertical",
      },
    }
  });

  // tabs section - briefly-about
  //
  const tabControls = document.querySelector('.briefly-about-list')
  // Все табы
  const tabs = tabControls.querySelectorAll('.briefly-about-link')
  // Все блоки контента
  const contents = document.querySelectorAll('.briefly-about-content-wrapper')

  tabControls.addEventListener('click', (event) => {
    const tab = event.target.closest('.briefly-about-link')
    if (!tab) return
    event.preventDefault()

    // Если уже активен — ничего не делаем
    if (tab.classList.contains('is-current')) return

    // Убираем активный класс у всех табов и контента
    tabs.forEach(t => t.classList.remove('is-current'))
    contents.forEach(c => c.classList.remove('briefly-about-content-wrapper--show'))

    // Добавляем активный класс к текущему табу
    tab.classList.add('is-current')

    // Находим и показываем нужный контент
    const targetContent = document.querySelector(tab.getAttribute('href'))
    if (targetContent) {
      targetContent.classList.add('briefly-about-content-wrapper--show')
    }
  })

  // tabs section - classes-timetable
  //
  const tabControlsCT = document.querySelector('.classes-timetable-list')
  // Все табы
  const tabsCT = tabControlsCT.querySelectorAll('.classes-timetable-link')
  // Все блоки контента
  const contentsCT = document.querySelectorAll('.classes-timetable-content-wrapper')

  tabControlsCT.addEventListener('click', (event) => {
    const tabCT = event.target.closest('.classes-timetable-link')
    if (!tabCT) return
    event.preventDefault()

    // Если уже активен — ничего не делаем
    if (tabCT.classList.contains('is-current')) return

    // Убираем активный класс у всех табов и контента
    tabsCT.forEach(t => t.classList.remove('is-current'))
    contentsCT.forEach(c => c.classList.remove('classes-timetable-content-wrapper--show'))

    // Добавляем активный класс к текущему табу
    tabCT.classList.add('is-current')

    // Находим и показываем нужный контент
    const targetContentCT = document.querySelector(tabCT.getAttribute('href'))
    if (targetContentCT) {
      targetContentCT.classList.add('classes-timetable-content-wrapper--show')
    }
  })

})()