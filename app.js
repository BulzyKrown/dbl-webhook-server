// Inciamos el servidor express y llamamos a los modulos NPM que usaremos
const express = require('express');
const app = express();

// Configuracion del servidor, este interpretar las peticiones como JSON. Tambien exportaremos los archivos que contienen las rutas. De esta menera, tendremos en orden el codigo.
const bodyParser = require('body-parser');
const dbl = require('./ruta/dbl');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Pagina de inicio del servidor
app.get('/', (req,res) => {
  res.json({
    status: true,
    message: 'Servidor en escucha de peticiones webhook',
    routes: [{'Discord Bot List':"/wbh/dbl"}]
  });
});

// Asi concatenamos las rutas:
app.use('/wbh/dbl', dbl);


// Ponemos en escucha el servidor | PD: quiza solo en glitch salga bonito el mensaje en consola
let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port '+listener.address().port)
});