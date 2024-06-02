/// DESESTRUCTURACION

// ASIGNACION DESESTRUCTURANTE


/// Forma a manopla
const persona = {
nombre: 'Tony',
edad: 45,
clave: 'Ironman',
//rango: 'Soldado',

};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

/// Usando asignacion desestructurante

const { nombre } = persona; // Extrae el parametro dentro de las llaves, en este caso de persona

console.log(nombre);

const { nombre:nombre2 } = persona;  // Asi se puede renombrar en caso que ya tuviera una variable con ese nombre

console.log(nombre2);


const { edad, clave, } = persona; // Se puede extrar mas de un parametro asi, como siempre en Js, no importa si se termina en coma.

console.log(edad, clave);


// Ejercicio

/*
const retornaPersona = ( usuario ) => { // Se puede desestructurar de esta manera recibiendo el argumento
    const { edad, clave, } = usuario;
    console.log(edad, clave);
};

*/
/*
const retornaPersona = ( {nombre, edad} ) => { //Desestructuracion directamente como argumento
    console.log(nombre, edad, );
};
*/

/*
const retornaPersona = ( {nombre, edad, rango = 'Capitan'} ) => { // Incorporando un parametro mas con valor por defecto (pero si existe la propiedad en el objeto usa ese valor)
    console.log(nombre, edad, rango);
};
*/

const useContext = ( {clave, nombre, edad, rango = 'Capitan'} ) => { // Incorporando un parametro mas con valor por defecto (pero si existe la propiedad en el objeto usa ese valor)
    
    return{
        nombreClave: clave,
        anios: edad,
        latlng : {
            lat: 15.1231,
            lng: -12.2322
        }
    }

};

//retornaPersona( persona ); // llamando directamente la funcion

const avenger = useContext(persona);

//const {nombreClave, anios, latlng} = avenger; //Asi extraemos el objeto anidado
const {nombreClave, anios, latlng:{lat, lng}} = avenger; //Asi extraemos cada objeto anidado individualmente

//Esta es otra manera
//const{lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);