const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 2391094,
        lat: 14.454,
        lng: 34.5654,
    }

};  

const persona2 = {...persona};
persona2.nombre = 'Piter';

console.log( {persona} ); // Entre las {} tambien imprime el nombre de las variables
console.log( {persona2} );
//console.table( {persona} );