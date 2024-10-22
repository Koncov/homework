(function () {

    //burger munu
    document.addEventListener('click', burgerMenuEvent)

    function burgerMenuEvent(event) {

        const burgerIconMenu = event.target.closest('.burger-icon')
        const burgerLinkMenu = event.target.closest('.nav__link')
        const burgerLogoMenu = event.target.closest('.header__logo')

        if (!burgerIconMenu && !burgerLinkMenu && !burgerLogoMenu) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            if (burgerLogoMenu) return
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    //modal
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(event) {
        event.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(event) {
        event.preventDefault()

        if (event.target.closest('.modal__cancel') || event.target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    //tabs
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(event) {

        const tabControl = event.target.closest('.tab-controls__link')

        if (!tabControl) return
        event.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabControl.getAttribute('href')

        document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')

        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')

    }

    //accordion

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {

        //Ели нужна открытая вкладка аккордеона
        //document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px'

        el.addEventListener('click', (event) => {

            const accordionList = event.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            
            const accordionControl = event.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })

    //Gallery Slider

    const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3
            },
            801: {
                spaceBetween: 32
            },
            1101: {
                slidesPerView: 4
            }
        }
    });


    //Testimonials Slider

    const swiperTestimonials = new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }
    });


    //Phone mask

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)


})()