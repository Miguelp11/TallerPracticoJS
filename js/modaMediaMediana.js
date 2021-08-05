//menu
const menuBurguer = document.getElementById("menuHamburguesa");
const menu = document.getElementById("menu");
menuBurguer.addEventListener('click', ()=>{ 
    menu.classList.toggle('desplegar-menu');
});

const boton = document.getElementById("boton");

boton.addEventListener("click", ()=>{
    const numeros= document.getElementById("listaNumeros").value;

    if(numeros == ""){
        alert("El campo de los valores no debe quedar vacio");
    } else{
        const listaNumeros = numeros.split(",");
        const listaNumeros1 = listaNumeros.map(Number);
        const resultadoPromedio= document.getElementsByClassName('resultado')[0];
        const resultadoMediana= document.getElementsByClassName('resultado1')[0];
        const resultadoModa= document.getElementsByClassName('resultado2')[0];
        
        const promedio = calcularPromedio(listaNumeros1).toFixed(5);
        const mediana = calcularMediana(listaNumeros1);
        const moda = calcularModa(listaNumeros1);
        
        resultadoPromedio.innerText = promedio;
        resultadoMediana.innerText = mediana;
        resultadoModa.innerText = moda[0] + ", " + moda[1]+" repeticiones";
    }
});

// CALCULAR PROMEDIO
function calcularPromedio(lista){
    // let sumaLista=0;    
    // for(let i=0; i<lista.length; i++){
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce((valorAcumulado=0, nuevoElemento)=>{
        return valorAcumulado + nuevoElemento;
    });
    return promedio = sumaLista/lista.length;    
}

// CALCULAR MEDIANA
function esPar(numero){
    return (numero %2 === 0) ? true : false;
}
function calcularMediana(lista){
    lista.sort(function(a,b){
        return a-b;
    });    
    let mediana;
    const mitadLista= parseInt(lista.length/2);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista-1];
        const promedio = calcularPromedio([elemento1, elemento2]);
        return mediana = promedio;
        
    }else{
        return mediana= lista[mitadLista];
    }
}

// CALCULAR MODA
function calcularModa(lista){
    const listaContar = {};
    lista.map(function(elemento){
        if (listaContar[elemento]){
            listaContar[elemento] +=1;
        } else {
            listaContar[elemento]=1;
        }
    });
    const listaArreglo = Object.entries(listaContar).sort((elementoA, elementoB)=>{
        return elementoA[1] - elementoB[1];
    });
    
    return moda = listaArreglo[listaArreglo.length -1];
}