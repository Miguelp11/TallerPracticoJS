//menu
const menuBurguer = document.getElementById("menuHamburguesa");
const menu = document.getElementById("menu");
menuBurguer.addEventListener('click', ()=>{ 
    menu.classList.toggle('desplegar-menu');
});

function calcularDescuento(precio, descuento){
    const porcentacePrecioConDescuento = 100 - descuento;
    const precioConDescuento= (precio * porcentacePrecioConDescuento)/100;
    
    return precioConDescuento;    
}

let cupones= ["bienvenido", "hotsale", "platzi"];

function calcularPrecio(){
    let precio= parseInt(document.getElementById("precio").value);
    let descuento = parseInt(document.getElementById("descuento").value);
    let resultado = document.getElementById("resultado");
    let cupon  = (document.getElementById("cupon").value).toLowerCase() ;
    let precioDescuento;
    let cuponValor;

    if (isNaN(precio) || isNaN(descuento)){
        alert("Los campos Precio y Descuento no deben quedar vacios");
    } else{
        if (cupon === ""){
            precioDescuento = calcularDescuento(precio, descuento);
            resultado.innerText= "$ "+precioDescuento; 
        } else if (cupon === cupones[0]){
            cuponValor = 5;
            descuento += cuponValor; 
            precioDescuento = calcularDescuento(precio, descuento);
            resultado.innerText= "$ "+precioDescuento; 
            alert(`Tu cupon ${cupones[0]} te da un extra del 5%`);   
        } else if (cupon === cupones[1]){
            cuponValor= 15;
            descuento += cuponValor;
            precioDescuento = calcularDescuento(precio, descuento);
            resultado.innerText= "$ "+precioDescuento; 
            alert(`Tu cupon ${cupones[1]} te da un extra del 15%`);    
        } else if (cupon == cupones[2]){
            cuponValor= 25;
            descuento += cuponValor;
            precioDescuento = calcularDescuento(precio, descuento);
            resultado.innerText= "$ "+precioDescuento; 
            alert(`Tu cupon ${cupones[2]} te da un extra del 25%`);    
        }else{
            alert(`El cupon ${cupon} NO es valido`);
        }
    }    
}