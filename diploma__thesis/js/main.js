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

  // tabs
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

})()