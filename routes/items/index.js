const express = require('express');
const router = express();

const { getItem, searchItem }  = require('./controller');

/*
    Rutas del item
*/

// cuando llamen a api/items/, hace la busqueda
router.get('/', searchItem);

// cuando llamen a api/items/id, hace la busqueda x id
router.get('/:id', getItem);

module.exports = router;