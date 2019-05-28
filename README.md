# Discord Bot List - Webhook para Discord
Bienvenido al proyecto con el cual podrás llevar a cabo las peticiones de las paginas de votos y llevarlas directamente a tu servidor de discord.
Cabe aclarar que este proyecto no solo es para *Discord Bot list*, también puede ser con las otras paginas que admiten los votos, este ejemplo se basa en esta pagina por ser la mas popular.

## Módulos NPM a usar
En este proyecto ocuparemos unos cuantos módulos para poder tener el control del proyecto:

* **Express** | <a href="https://www.npmjs.com/package/express" target="_blank">Más información</a>

Crear de manera sencilla un servidor web.
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fexpress-npm-module.png?1559057160017)

* **Phin** | <a href="https://www.npmjs.com/package/phin" target="_blank">Más información</a>

Tendremos obtener y recibir las peticiones de paginas con votación. Cabe mencionar que este no es el único modulo que puede cumplir esta función, aunque es el mas liviano. 
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fphin-npm-module.png?1559057366425)

* **Body-parser** | <a href="https://www.npmjs.com/package/body-parser" target="_blank">Más información</a>

Sera el encargado de validar datos, en este caso el JSON recibido de la pagina de votos.
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fbody-parser-npm-module.png?1559070661803)

## Pasos para usar el proyecto correctamente

### Paso 1
Dirígete algún canal de tu servidor, entra en la configuración de el y busca una sección llamada "Webhooks". Una vez ahí, dale al botón llamado **Crear Webhook** y copia el enlace de abajo (No te preocupes por el nombre o el avatar, mas adelante los podremos editar con el servidor)
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fpaso-1.png?1559078777512)

### Paso 2
Ve a **glitch.com** y haz remix de este proyecto.
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fpaso-2.png?1559079666798)

### Paso 3
Dentro del proyecto, dirigete al archivo *.env*:
```
WBH_LINK= Enlace que copiaste en el paso 1 (enlace de webhook)
AUTH= Un texto simple sin espacios, por si las dudas. Algo como... "pudin"
```
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fpaso-3.png?1559080525617)

`NOTA: Si tu bot no esta dentro de la pagina, no podras seguir con el siguiente paso`

### Paso 4
Ingresa a la configuración de la pagina de tu bot, ve al final de ella. A continuacion, rellena los espacios de la seccion de "webhook":

* **URL:** Enlace de tu proyecto de glitch, incluyendo "/wbh/dbl" al final del enlace.
* **Authorization:** Mensaje que has escrito en el paso 3 en "AUTH"
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fpaso-4.png?1559080876389)

### Paso 5
Finalmente le damos a "save" y luego a "test". Si todo va correctamente, veras un mensaje del webhook con los datos de tu bot:
![](https://cdn.glitch.com/9b8332fd-1bb4-4609-8196-4911968ed0e2%2Fpaso-5.png?1559081712224)