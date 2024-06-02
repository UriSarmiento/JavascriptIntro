// Importar archivos en javascript

// Nota: Es necesario usar la palabra export en el archivo que se requiere importar en otro lado

//Importacion sin el default en el export
//import { heroes } from './data/heroes';  // Por defecto busca un archivo js, es opcional ponerle el .js

//Con exportacion por defecto
//import heroes  from './data/heroes'; 

//Mezclando exportacion por defecto e individual
import heroes, {owners}  from '../data/heroes'; //con el .. se sale de la carpeta actual 

export const getHeroeById = (id) => {
    
    return heroes.find((heroe) => heroe.id === id); // El find utiliza una funcion que se conoce como callback
}; 

//console.log(getHeroeById(1));

export const getHeroesByOwner = (owner) => {
    
    return heroes.filter((heroe) => heroe.owner === owner); // Con filter podemos regresar todos los valores que coincidan con la condicion
}; 

//console.log(getHeroesByOwner('DC'));

//console.log(owners);


