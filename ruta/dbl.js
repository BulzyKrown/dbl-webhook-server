// Para las rutas, express usa una seccion llamada "ROUTER" con el cual podremos tener ordenado el codigo sin perdernos.
// Tambien llamaremos al modulo phin, para enviar los datos al webhook en nuestro servidor
const express = require('express');
const route = express.Router();
const phin = require('phin');
// En esta parte, esta ubicada la URL de nuestro WEBHOOK | Revisa el archivo "".env"
const wbh = process.env.WBH_LINK;


// Pagina principal de la seccion de "Discord Bot List", es opcional pero le da un toque estetico
route.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Peticion recibida con exito',
    typeReq: ['POST','GET']
  })
});

// Aqui, es donde comienza la magia. Aqui tomaremos los datos que nos proporciona Discord Bot List para enviarlos al webhook

/*
Discord bot list envia los siguiente datos:
- bot = ID de nuestro bot
- user = ID del usuario que voto
- type = typo de peticion, esta puede contener "Test" que lo veremos más adelante.
- query = por si quieres un dato extra.
- isWeekend = es boolean, dira si es fin de semana o no (si es true, se multiplican los votos de los usuarios x2)
*/
route.post('/', async (req, res) => {
  
  // En Discord Bot List, nos solicitara un texto que sirva como "contraseña" | Ejemplo en el paso 4 en README.md
  if (req.headers.authorization !== process.env.AUTH) 
    return res.send({
        code: "Autenticacion erronea"
    })
  
  
  // En este ejemplo usaremos solamente el ID del usuario y del bot.
  let user_id = req.body.user;
  let bot_id = req.body.bot
  
  // Como anteiormente mencione en "TYPE" puede decir que es una prueba, por lo que tambien podemos capturar ese dato y hacer algo anexo a la peticion original. En este ejemplo, le he agregado la palabra TEST simplemente
  
  // NOTA: Esta parte esta mejor explicada en el paso 5 de "README.md"
  if(req.body.type == 'test'){
    
    // NOTA: Cambiar "ID DE TU BOT" por... ya sabes...
    await phin({
    url: wbh,
    method: 'POST',
    data: {
      content: `\`TEST\` **${user_id}** ha votado por nuestro bot | https://discordbots.org/bot/${bot_id}/vote`,
      avatar_url: 'https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fdblnew.png?1559060474954',
      'username': 'Discord Bot List'
    }
  });
    
  } else {
    // Si no es "TEST" envira como un dato real, por lo que hay que tener precaución
    await phin({
    url: wbh,
    method: 'POST',
    data: {
      content: `**${user_id}** ha votado por nuestro bot | https://discordbots.org/bot/${bot_id}/vote`,
      avatar_url: 'https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fdblnew.png?1559060474954',
      'username': 'Discord Bot List'
    }
  });
    
  }
});


// Con esto, podremos llamar al archivo desde app.js
module.exports = route;