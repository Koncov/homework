(function () {

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


    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        if (e.target.closest('.modal__cancel') || e.target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }
})()