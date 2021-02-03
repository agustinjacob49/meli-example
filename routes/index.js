// Este es el archivo de rutas
const express = require('express');
const router = express.Router();

const items = require('./items');
//const users = require('./users');

/*
    Rutas
*/

// cuando llamen a /items, usa las siguientes rutas
router.use('/items', items);
//router.use('/users', users);

module.exports = router;