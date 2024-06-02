// Promesas en Javascript

//Las promesas son asincronas, asi que se ejecutan hasta que termina de ejecutar todo lo que es sincrono (secuencial)

//Cuando la promesa termina existosamente se ejecuta el resolve, sino el reject

import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(1);
//         if (heroe === undefined) {
//             reject('No se pudo encontrar el hereoe');
//         }
//         else {
//             resolve(heroe);
//         }        
//     }, 2000)
// });


// Metodos de promesas
// then, que ejecuta cuando la promesa se cumplio
// catch, nosotros lo mandamos a ejecutar, por ejemplo con las excepciones
// finally que es despues del then o catch

// promesa.then( (heroe) => {
//     console.log('Heroe: ', heroe);
// } )
// .catch( err => console.warn(err)); // El reject le envia el mensaje de error a el catch y lo imprimimos como un warning


const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if (heroe === undefined) {
                reject('No se pudo encontrar el hereoe');
            }
            else {
                resolve(heroe);
            }        
        }, 2000)
    });

};

/*
getHeroeByIdAsync(3).
then(heroe=> console.log('Heroe', heroe))
.catch( err => console.warn(err));
*/

getHeroeByIdAsync(3).
then(console.log)
.catch(console.warn);