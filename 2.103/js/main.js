(function () {

    document.addEventListener('click', burgerMenuEvent)

    function burgerMenuEvent(event) {

        const burgerIconMenu = event.target.closest('.burger-icon')
        const burgerLinkMenu = event.target.closest('.nav__link')
        const burgerLogoMenu = event.target.closest('.header__logo')

        if (!burgerIconMenu && !burgerLinkMenu && !burgerLogoMenu) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-burger-menu')) {
            if (burgerLogoMenu) return
            document.body.classList.add('body--opened-burger-menu')
        } else {
            document.body.classList.remove('body--opened-burger-menu')
        }
    }
})()