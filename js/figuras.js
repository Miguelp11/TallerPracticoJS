//menu
const menuBurguer = document.getElementById("menuHamburguesa");
const menu = document.getElementById("menu");
menuBurguer.addEventListener('click', ()=>{ 
    menu.classList.toggle('desplegar-menu');
});

// CODIGO DEL CUADRADO
console.group("cuadrado");

// Perimetro cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 

// Area cuadrado
function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();

// CODIGO DEL TRIANGULO
console.group("tringulo");

// Perimetro triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
} 

// Area triangulo
function areaTriangulo(base, altura){
    return (base*altura) /2;
} 

console.groupEnd();

// CODIGO DEL CIRCULO
console.group("circulo");
const pi = Math.PI;

// Diametro circulo
function diametroCirculo(radio){
    return radio*2;
}

// Circunferencia circulo
function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return pi * diametro;
}

// Area circulo
function areaCirculo(radio){
    return (radio*radio) * pi;
}

console.groupEnd();

// Interaccion con HTML
const botonCuadrdado= document.getElementById("botonCuadrado");
const botonTriangulo = document.getElementById('botonTriangulo');
const botonCirculo = document.getElementById('botonCirculo');

botonCuadrdado.addEventListener('click', function(){
    const input = document.getElementById("cuadrado").value;
    if (input == ""){
        alert("Ningun campo del Cuadrado debe quedar vacio");
    }else{
        // function calcularCuadrado(){         
            const resultadoA= document.getElementsByClassName('resultado')[0];
            const resultadoP= document.getElementsByClassName('resultado1')[0];
        
            const area= areaCuadrado(input);
            const perimetro = perimetroCuadrado(input);
            
            resultadoA.innerHTML= area+" cm"+"<sup>2"+"</sup>";
            resultadoP.innerText  = perimetro + " cm";
        // }
    }
});

botonTriangulo.addEventListener('click', function(){
    const lado1 = parseInt(document.getElementById("trianguloLado1").value);
    const lado2 = parseInt(document.getElementById("trianguloLado2").value);
    const base = parseInt(document.getElementById("trianguloBase").value);
    const altura = parseInt(document.getElementById("trianguloAltura").value);

    if(isNaN(lado1) || isNaN(lado2) || isNaN(base) || isNaN(altura)){
        alert("Ningun campo del Triángulo debe quedar vacio");
    }else{
        // function calcularTriangulo(){
            const resultadoA= document.getElementsByClassName('resultado')[1];
            const resultadoP= document.getElementsByClassName('resultado1')[1];
        
            const area = areaTriangulo(base, altura);
            const perimetro = perimetroTriangulo(lado1,lado2,base);
        
            resultadoA.innerHTML= area+" cm"+"<sup>2"+"</sup>";
            resultadoP.innerText= perimetro+" cm";
        // }
    }
});

botonCirculo.addEventListener('click', function(){
    const radio= document.getElementById('circuloRadio').value;

    if(radio==""){
        alert("Ningun campo del Círculo debe quedar vacio");
    }else{
        // function calcularCirculo(){
            const resultadoD= document.getElementsByClassName('resultado')[2];
            const resultadoC= document.getElementsByClassName('resultado1')[2];
            const resultadoA= document.getElementsByClassName('resultado2')[0];
        
            const diametro= diametroCirculo(radio);
            const circun= circunferencia(radio).toFixed(5);
            const area = areaCirculo(radio).toFixed(5);
        
            resultadoD.innerText= diametro+" cm";
            resultadoC.innerText= circun+ " cm";
            resultadoA.innerHTML= area+" cm"+"<sup>2"+"</sup>";        
        // }
    }
});
