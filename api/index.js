/* 
* Iniciar o deploy da api neste aquivo
* Entrar no diretorio da api via terminal: $nodemon index
*/

/* Importando configurações do server.js */
var app = require('./config/Server');

console.log('Server online!');
new app.config.DbConf(app).createTable();
new app.config.DbData(app).createData();

app.get('/', function(req, res){
	res.send('teste');
	
});

app.post('/', function(req, res){
	res.send('teste');
});

app.get('/contas', function(req, res){
	res.send('teste');
});

app.post('/contas', function(req, res){
	res.send('teste');
});


