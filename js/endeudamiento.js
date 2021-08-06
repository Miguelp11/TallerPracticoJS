//menu
const menuBurguer = document.getElementById("menuHamburguesa");
const menu = document.getElementById("menu");
menuBurguer.addEventListener('click', ()=>{ 
    menu.classList.toggle('desplegar-menu');
});

const boton = document.getElementById("boton");

boton.addEventListener('click', ()=>{
    const capacidad = document.getElementById("capacidad").value / 100;
    const ingresos = document.getElementById("mensual").value;
    const gasto = document.getElementById("gastos").value;
    const resultadoEndeudamiento = document.getElementsByClassName("resultado")[0];
    
    if(ingresos == "" || gasto == ""){
        alert("El campo ingresos y gastos no deben quedar vacios")
    }  else {
        const endeudamiento = calcularEndeudamiento(ingresos,gasto,capacidad);
        if(endeudamiento < 0){
            resultadoEndeudamiento.innerText = "$"+ endeudamiento +" Tu salud financiera esta en riesgo.";   
        }else{
            resultadoEndeudamiento.innerText = "$"+ endeudamiento +" Es su capacidad de endeudamiento.";
        }
    }
});

function calcularEndeudamiento(ingresos, gastos, porcentaje){
    return (ingresos - gastos) * porcentaje;
}