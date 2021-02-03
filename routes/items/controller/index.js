const axios = require('axios');


const getItem =  async (req, res) => {
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
        console.log(err);
        res.send(err);
    }
};

const searchItem =  async (req, res) => {
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


module.exports = {
    searchItem,
    getItem
};