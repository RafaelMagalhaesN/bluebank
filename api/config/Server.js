/*
* Aqui encontram-se as configurações globais da api
* Utilizado o consign para requires automaticos
* Utilizado o framework express
*/

/* Import dos módulos necessarios na api */

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var app = express();

/* Engine de views */ 
app.set('view engine', 'ejs');
app.set('views', './application/views');

/* Middlewares */ 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

/* Configuraçao da porta */
var port = 8080;
app.listen(port);

/* Autoload */
consign()
	.include('application/controllers')
	.then('config/DbConf.js')
	.then('config/DbData.js')
	.then('application/models')
	.into(app);


/* Mensagem no console que o server esta online */
console.log('Server em http://localhost:'+port); 

/* Export do app */
module.exports = app;


