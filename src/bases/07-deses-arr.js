// Asignacion desestructurante de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = personajes; // Asi se desestructura y se busca el primer elemento del arreglo

const [, p2] = personajes; // Aqui se le indica a javascript con la coma que el primer elemento no nos interesa y que tome el segundo

const [, , p3] = personajes;

console.log(p1);

console.log(p2);


console.log(p3);

const retrornaArreglo = () => {
    return ['ABC',123];
};

const [letras, numeros] = retrornaArreglo();

console.log(letras,numeros);

// Tarea
// 1. El primer valor del arreglo se llamara nombre
// 2. El segundo se llamara set nombre
const useState = ( nombre ) => {
    return [ nombre, 
             ()=> {console.log('Setting Nombre')} ];
};

const [nombre,setNombre] = useState('Uriel');

console.log(nombre);
setNombre();

