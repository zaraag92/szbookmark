const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__body')
const logo = document.querySelector('.header__logo')

if(iconMenu){
    iconMenu.addEventListener('click', function(){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
        logo.classList.toggle('_active')
    })

}