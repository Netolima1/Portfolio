let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-Menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-Menu')
})