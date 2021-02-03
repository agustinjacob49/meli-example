// En el archivo index vamos a iniciar el proyecto.
// Express nos va a permitir recibir llamadas
// http con protocolo rest. 
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// const es una manera de crear una variable en JS
// las variables en js no son tipadas, pueden contener cualquier cosa
// entero, letra, funcion, promesa, hasta una pagina entera.
// en express voy a guardar todo el paquete de funciones
// que contiene el modulo express

const app = express();

//App.use lo que hace es decirle a express que utilice cierto middleware
// que es un middleware ? 
// es un filtro o paso intermedio, en el cual se puede procesar un dato.

// Cuando llegue una request, primero tiene que pasar por el bodyParser. 
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Ejemplo : http://127.0.0.1:3000/api/items/1235
async function getItem(req, res) {
    // req.params veo lo que me enviaron como param

    // Sincronicamente o asincronicamente.

    //Sincronico quiere decir que hasta que yo no termine
    // mi request, no devuelvo nada. Esto bloquea

    // Asincronico, quiere decir que yo hago la solicitud al servicio
    // externo y me quedo esperando nuevas llamadas. No bloqueo.

    const itemId = req.params.id;
    const url = 'https://api.mercadolibre.com/items/';

    // Sincronico
    /*
    axios.get(url + itemId)
        .then(function(response){
            const item = response.data;
            res.json(item);
        })
        .catch(function(error){
            console.log(error);
            res.send(error);
        });
    */
    
    // Asincronica > performante.
    try {
        const response = await axios.get(url + itemId);
        const item = response.data;
        res.json(item);

    }catch(err){
        console.log(error);
        res.send(error);
    }
};

//Ejemplo : http://127.0.0.1:3000/api/items?q=kilo&marca=nike
const searchItem = function (req, res) {
    // req.query veo lo que viene
    res.send({ b : 1});
};

//Cuando alguien ejecute el get sobre la ruta /api/hola, ejecuta
// lo que esta dentro de buscarItem
// /:id indica que en ese lugar va a venir un dato.
// es decir, esta ruta es dinamica despues del items/cualquiercosa
app.get('/api/items/:id', getItem);
app.get('/api/items', searchItem);

// El servidor escucha llamdas o peticiones en este puerto
app.listen(3000);

/* 
middleware. 
const uno = 1;

dividirPorTres(uno, elevarAlCuadrado);

const dividirPorTres = function(a, next) { 
    next(a/3);
}

const elevarAlCuadrado = function (numero) {
    return numero*numero;
};
*/

