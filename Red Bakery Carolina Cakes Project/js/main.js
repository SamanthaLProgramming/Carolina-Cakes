const toggleMiniMenu = document.querySelector('i.bx-menu')
const miniNav = document.querySelector('.nav-list')


toggleMiniMenu.addEventListener('click', () => {
    miniNav.classList.toggle('open')

    const isOpen = miniNav.classList.contains('open')

})
