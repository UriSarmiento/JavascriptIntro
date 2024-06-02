// Async

// const getImagenPromesa = () => 
//     new Promise(resolve=> resolve('https://respuestapromesa.com'));

// getImagenPromesa().then(console.log);

const getImagen = async() => { //Palabra reservada async lo vuelve una promesa
// Para el manejo de errores con async y await se tiene que utilizar try y catch

    try{

        const apiKey = 'f71rKEyZJAbWBIeq4Y21WHpyWQbugxI3';
        // El await espera a que la promesa termine antes de ejecutar la siguiente linea de codigo
            const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
            const data = await resp.json()
            .then(
                ({data}) => {
                    const {url} = data.images.original;
        
                    const img = document.createElement('img');
                    img.src = url;
        
                    document.body.append(img);
        
                }
            );
        

    } catch(error){
        console.error(error);
    };
    

};

getImagen();

