// Codigo del cuadrado
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

// Codigo del triangulo
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

// Codigo del circulo
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