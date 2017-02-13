/*
* Aqui encontram-se as configurações globais do client
* Utilizado o consign para requires automaticos
* Utilizado o framework express
*/

/* Import dos módulos necessarios no client */

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
var port = 3000;
app.listen(port);

/* Autoload */
consign()
	.include('application/routes')
	.then('application/models')
	.then('application/controllers')
	.into(app);


/* Tratamento de erros 404 e 500 */ 
app.use(function(req, res, next){
	res.status(404).render('errors/404');
	next();
});

app.use(function(err, req, res, next){
	res.status(500).render('errors/500');
	next();
});

/* Mensagem no console que o server esta online */
console.log('Cliente rodando em http://localhost:'+port); 

/* Export do app */
module.exports = app;
