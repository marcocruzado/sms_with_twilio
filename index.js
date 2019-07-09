require('dotenv').config();
const express = require('express');
/* esto es para generar una ruta en donde nos devolvera el mensaje*/ 
const app = express();

/* rquiero estos dos comendo desde las variables de entorno para que me puedan enviar mi mensaje 
esto sirvio para nosotros mandarle un mensaje  a un cliente digamos en nuestra aplicacion

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const cliente = require('twilio')(ACCOUNT_SID,AUTH_TOKEN);


cliente.messages.create({
     to : process.env.numerotelefonico,
     from : '+12055122383',
     body :'hola mi mari te estoy hablando desde  mi app'
 })
 .then(message => console.log(message.sid));
*/
/*ahora este otro trozo de cofigo nos servira para que una vez el cliente envien un mensaje  a nosotros nos 
llegue un arespuesta para eso tenemos que tener un servidor y lo mejor sera descargar EXPRESS */



const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.post('/sms',(res,req)=>{
    const twiml= new MessagingResponse();
    twiml.message('tu mensaje a sido recibido');
    res.writeHead(200,{'Content-Type' : 'text/xml'});
    res.end(twiml.toString());
})

app.listen('4000',()=>{
    console.log("el servidor esta en el  puerto 4000");
    /*para que twilio puedo enviarnos el mensaje tiene que enviarnoslo atrves de un ruta no 
    en un localhost para esto lo que haremos es simular que nuestra aplicacione sta en un servidor en la 
    nueb y eso lo haremos con ngrock */
})


 