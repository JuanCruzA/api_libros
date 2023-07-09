const express = require('express');
const app = express();

app.use(express.json());

//importar router de libros
const librosRouter = require('./routes/libros');
const errorHandler = require('./middlewares/errorHandler.js');


app.use('/libros', librosRouter);
app.use(errorHandler);


app.listen(3000, () => {
    console.log('el servidor se ha iniciado en el puerto 3000');
});

