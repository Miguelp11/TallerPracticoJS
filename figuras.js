// Codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado*4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es ${ladoCuadrado}cm^2`);
console.groupEnd();

// Codigo del triangulo
console.group("tringulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo= 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;

console.log(`El lado 1 del triangulo mide ${ladoTriangulo1}cm, el lado 2 del triangulo mide ${ladoTriangulo2}cm y la base mide ${baseTriangulo}cm `);
console.log(`La altura del triangulo es ${alturaTriangulo}cm`);
console.log(`El perimero del triangulo es ${perimetroTriangulo}cm`);
console.log(`El area del tringulo es ${areaTriangulo}cm^2`);
console.groupEnd();

// Codigo del circulo
console.group("circulo");
const radioCirculo = 4;
const diametroCirculo= radioCirculo*2;
const pi = Math.PI;
const circunferencia = pi * diametroCirculo;
const areaCirculo= (radioCirculo * radioCirculo) * pi;

console.log(`el radio del circulo es ${radioCirculo}cm`);
console.log(`El diametro del circulo es ${diametroCirculo}cm`);
console.log(`pi es  ${pi}`);
console.log(`la circunferencia del circulo es ${circunferencia}cm`);
console.log(`el area del circulo es ${areaCirculo}cm^2`);

console.groupEnd();
