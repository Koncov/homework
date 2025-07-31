(function () {


  //slider-promo
  const swiper = new Swiper('.slider-promo-mySwiper', {
    loop: true,
    direction: "vertical",
    pagination: {
      el: ".slider-promo-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}" data-slide-number="${index + 1}"></span>`;
      },
    },


  });


})()