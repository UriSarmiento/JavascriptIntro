// Arreglos en Js
// const arreglo = new Array(100);

const arreglo = [1,2,3,4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//let arreglo2 = [ arreglo.concat(5)] //Asi encontre mi camino

let arreglo2 = [...arreglo,5] //Con operador spread se extrae la informacion del arreglo
// arreglo2.push(5);

const arreglo3 = arreglo2.map( function(numero){ // Genera un nuevo arreglo con los valores de arreglo 2
    return numero * 2;                           // De ahi por cada elemento realizamos la funcion que retorna la multiplicacion x2
});                                              // si no se pone return devuelve undefined por cada posicion

//console.log(arreglo);
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);