const nombre = 'Uriel';
const apellido = 'Sarmiento';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${ nombre } 
${apellido}
${ 1 + 1 }`; //template string

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(` Este es un texto: ${ getSaludo( nombre ) } `)