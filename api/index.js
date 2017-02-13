/* 
* Iniciar o deploy da api neste aquivo
* Entrar no diretorio da api via terminal: $nodemon index
*/

/* Importando configurações do server.js */
var app = require('./config/Server');

console.log('Server online!');

/* Instanciando a criando das tables e inserindo usuarios iniciais */
new app.config.DbConf().createTable();
new app.config.DbData(app).createData();

app.get('/', function(req, res){
	res.status(200).json({about: [{api : '1.0'}, 
		{response : 'application/json'}, 
		{name: 'bluebank'}]});
});

/* POST: Rota: localhost:porta/api */
app.post('/api', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).allAccounts(req, res);
});

/* GET: Rota: localhost:porta/api */
app.get('/api', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).allAccounts(req, res);
});

/* PUT: Rota: localhost:porta/api/id */
app.put('/api/:id', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).updateAccount(req, res);
});

/* POST: Rota: localhost:porta/api/id */
app.post('/api/:id', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).oneAccount(req, res);
});

/* GET: Rota: localhost:porta/api/id */
app.get('/api/:id', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).oneAccount(req, res);
});

/* POST: Rota: localhost:porta/cpf */
app.post('/cpf', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).allAccounts(req, res);
});

/* GET: Rota: localhost:porta/cpf */
app.get('/cpf', function(req, res){
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).allAccounts(req, res);
});

/* PUT: Rota: localhost:porta/cpf/cpf_numero */
app.put('/cpf/:cpf', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).updateAccountCpf(req, res);
});

/* POST: Rota: localhost:porta/cpf/cpf_numero */
app.post('/cpf/:cpf', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).oneAccountCpf(req, res);
});

/* GET: Rota: localhost:porta/cpf/cpf_numero */
app.get('/cpf/:cpf', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Accounts = new app.config.DbConf().schemaAccount();
	new app.application.controllers.HomeController(app, Accounts).oneAccountCpf(req, res);
});

/* PUT : Rota: localhost:porta/trasnferencias */
app.put('/transferencias', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Transfer = new app.config.DbConf().schemaTransfer();
	new app.application.controllers.HomeController(app, Transfer).createTransfer(req, res);
});

/* GET : Rota: localhost:porta/transferencias */
app.get('/transferencias', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Transfer = new app.config.DbConf().schemaTransfer();
	new app.application.controllers.HomeController(app, Transfer).allTransfers(req, res);
});

/* POST : Rota: localhost:porta/transferencias/id */
app.post('/transferencias/:id', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Transfer = new app.config.DbConf().schemaTransfer();
	new app.application.controllers.HomeController(app, Transfer).oneTransfer(req, res);
});

/* GET : Rota: localhost:porta/transferencias/id */
app.get('/transferencias/:id', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var Transfer = new app.config.DbConf().schemaTransfer();
	new app.application.controllers.HomeController(app, Transfer).oneTransfer(req, res);
});



