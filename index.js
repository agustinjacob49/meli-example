const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// cuando llamen a '/api', ejecuta las siguientes rutas
app.use('/api', router);

app.listen(3000);



