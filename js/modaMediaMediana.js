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