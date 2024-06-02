//function saludar(nombre){
//    return `Hola, ${nombre}`;
//}

const saludar = function(nombre){  // es conveniente declarar funciones en constantes para evitar hacer asignaciones sobre ellas de form accidental
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {  // Hecha como funcion de flecha
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`; // Simplificado

const saludar4 = () => `Hola Mundo`;

//saludar = 10;

console.log(saludar('Dobby'));
console.log(saludar2('Uriel'));
console.log(saludar3('Alguien'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'uriel1997'
}); // El parentesis significa que retornamos de forma implicita

const user = getUser();

console.log( user );



// Tarea

// 1. Transformar a funcion de flecha
// 2. Retornar objeto implicito
// 3. Pruebas


const getUsuarioActivo = (nombre) => ({
   
        uid: 'ABC567',
        username: nombre

});

const usuarioActivo = getUsuarioActivo('UriBerto');
console.log(usuarioActivo);