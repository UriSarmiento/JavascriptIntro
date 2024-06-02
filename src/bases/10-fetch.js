const apiKey = '3hE66sbHZeFq3z9jVyxMSV62iuu3iagB';

// Fetch por defecto hace una promesa y la resuelve con la respuesta
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// Extraemos la data recuperada con un then, ya que viene en la resolucion de la promesa.

// Hecho de forma extensa
// peticion.then (
// (resp) => {
//     console.log('Primera parte, response completa');
//     console.log(resp);
//     resp.json().then(
//         data => {
//             console.log('Segunda Parte, extrayendo la data legible');
//             console.log(data);
//         }
//     ); // Devuelve otra promesa que resuelve lo que venga en el API
// })
// .catch(console.warn);


// Promesa encadenada

peticion.then (resp => resp.json()) // Retorna una promesa por lo que podemos usar otro then para obtener la data
.then( ({data}) => { //Desestructuracion para traer solo la data, sino podriamos jalarlo como data.data en el console log
    console.log(data.images.original.url); // Puede llamarse como sea, aunque no le pongamos "data" va a devolver el body
    const {url} = data.images.original;
    console.log(url);

    const img = document.createElement('img'); // Creamos esta constante para ser nuestro html
    img.src = url; //Su source es la URL del gif

    document.body.append(img); //Aqui agregamos la constante al body del html, poniendo el gif en el html.


})
.catch(console.warn); // Se podrian tener catches por cada then, pero no es necesario porque este atraparia todo