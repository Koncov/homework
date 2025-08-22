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


  // accordion
  const accordionLists = document.querySelectorAll('.accordion-list')

  accordionLists.forEach(el => {
    el.addEventListener('click', (event) => {
      const accordionControl = event.target.closest('.accordion-list__control')
      if (!accordionControl) return

      const accordionItem = accordionControl.parentElement
      const accordionContent = accordionControl.nextElementSibling
      const currentTitle = accordionControl.querySelector('.menu-link')

      // Сначала убираем у всех h3 класс is-current
      el.querySelectorAll('.menu-link').forEach(h3 => {
        h3.classList.remove('is-current')
      })

      // Закрываем все открытые элементы внутри этого списка
      el.querySelectorAll('.accordion-list__item').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('accordion-list__item--opened')
          item.querySelector('.accordion-list__content').style.maxHeight = null
        }
      })

      // Переключаем текущий
      accordionItem.classList.toggle('accordion-list__item--opened')

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        currentTitle.classList.add('is-current') // 🔥 добавляем кружок
      } else {
        accordionContent.style.maxHeight = null
        currentTitle.classList.remove('is-current')
      }
    })
  })


})()