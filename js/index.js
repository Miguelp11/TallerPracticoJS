//menu
const menuBurguer = document.getElementById("menuHamburguesa");
const menu = document.getElementById("menu");
menuBurguer.addEventListener('click', ()=>{ 
    menu.classList.toggle('desplegar-menu');
});
