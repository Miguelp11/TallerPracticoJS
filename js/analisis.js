const salariosCol = colombia.map((persona) => {
    return persona.salario;
});

const salariosColOrdenado = salariosCol.sort((salarioA, salarioB) =>{
    return salarioA - salarioB;
});

function calcularPromedio(lista){
    const sumaLista = lista.reduce((valorAcumulado=0, nuevoElemento)=>{
        return valorAcumulado + nuevoElemento;
    });
    return sumaLista/lista.length;    
}

function esPar(numero){
    return numero %2 ==0 ? true : false;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitad];
        const elemento2 = lista[mitad -1];
        const mediana= calcularPromedio([elemento1, elemento2]);
        return mediana;
    } else{
        return lista[mitad];
    }
}

const salarioSplice = parseInt((salariosColOrdenado.length * 90) /100);
const spliceContador = parseInt(salariosColOrdenado.length - salarioSplice);
const salariosColTop10 = salariosColOrdenado.splice(salarioSplice, spliceContador);

const medianaGeneral = medianaSalarios(salariosColOrdenado);
const medianaTop10= medianaSalarios(salariosColTop10);
