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
        el.addEventListener('click', (event) => {

            const accordionControl = event.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })



    })


})()