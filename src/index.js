// --> Crear el Servidor 
//Requiero los modulos instalados 
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

// Ajustes
// --> process.env.PORT || xxxx permite utilizar el puerto por defecto y si no existe que utilice el puerto estipulado 'xxxx'
app.set('port', process.env.PORT || 4000);




// Middlewares-Función que procesa datos antes de que el servidor los reciba
// --> Morgan permite tener información de las peticiones al servidor. (metodo, error, tiempo, navegador, hora...)
app.use(morgan('dev'));
// --> Recibir y entender datos de formularios
app.use(express.urlencoded({extended: false}));
// --> Recibir y entender formatos JSON
app.use(express.json());

// rutas

app.use('/api/index', require('./routes/index'));


// Empezar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


// Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));