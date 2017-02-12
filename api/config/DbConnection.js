/* 
* Aqui encontram-se as configuraçoes do db
* Usado o sequelize(ORM) para Node.js com o banco de dados mysql
*/
var Sequelize = require('sequelize');

/* Configuração do sequelize */ 
var sequelize = new Sequelize('bluebank', 'root','root1', {
	host:  'localhost',
	port: 3306,
	dialect: 'mysql'
});

sequelize.authenticate()
	.then(function(){
		console.log('Conexao realizada com sucesso no banco de dados mysql.');
	})
	.catch(function(err){
		console.log('Erro ao conectar-se no banco de dados mysql.');
	})
	.done();
	

module.exports.conn = sequelize;