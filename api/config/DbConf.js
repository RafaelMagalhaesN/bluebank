/* 
* Aqui encontram-se as configuraçoes do db
* Usado o sequelize(ORM) para Node.js com o banco de dados mysql
*/
/* Import do sequelize */
var Sequelize = require('sequelize');

/* Configuração do sequelize */ 
var sequelize = new Sequelize('bluebank', 'root','root1', {
	host:  'localhost',
	port: 3306,
	dialect: 'mysql'
});

/* Realiza a autenticaçao com o servidor */
sequelize.authenticate()
	.then(function(){
		console.log('Conexao realizada com sucesso no banco de dados mysql.');
	})
	.catch(function(err){
		console.log('Erro ao conectar-se no banco de dados mysql.');
	})
	.done();

/* Schema da table Contas */
var Account = sequelize.define('Contas', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, 
	nome: Sequelize.STRING,
	cpf: {type: Sequelize.STRING, unique: true, allowNull: false},
	agencia: Sequelize.STRING,
	conta: {type: Sequelize.STRING, unique: true, allowNull: false}, 
	banco: Sequelize.STRING,
	saldo: Sequelize.INTEGER,
},{timestamps: false});
sequelize.sync().done();


/* Schema das table Transacoes */
var Transfer = sequelize.define('Transferencias', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, 
	from_user_id: { type: Sequelize.INTEGER, allowNull: false },
	from_user_cpf: {type: Sequelize.STRING, allowNull: false},
	from_user_agencia: Sequelize.STRING,
	from_user_conta: Sequelize.STRING,
	from_user_banco: Sequelize.STRING,
	valor_transferido: Sequelize.INTEGER,
	to_user_id: { type: Sequelize.INTEGER, allowNull: false },
	to_user_cpf: {type: Sequelize.STRING, allowNull: false},
	to_user_agencia: Sequelize.STRING,
	to_user_conta: Sequelize.STRING,
	to_user_banco: Sequelize.STRING,
	createdAt: 	{ type: Sequelize.DATE, allowNull: false, defaultValue: sequelize.fn('NOW') },
	updatedAt: 	{ type: Sequelize.DATE, allowNull: false, defaultValue: sequelize.fn('NOW') },
	deletedAt: { type: Sequelize.DATE, allowNull: true, defaultValue: null }
},{timestamps: true, paranoid: true});
sequelize.sync().done();

/* Construtor */ 
function DbConf(){
	
} 

/* Funcao que cria a table chamada Contas */
DbConf.prototype.createTable = function(){
/* Cria a table */
sequelize.sync()
	.then(function(){
		console.log('Tabelas criadas!')
	})
	.catch(function(err){
		console.log('Erro ao criar tabelas!')
	})
	.done();
}

/* Funcao para retornar o Schema Account */
DbConf.prototype.schemaAccount = function(){
	return Account;
}

/* Funcao para retornar o Schema Transfer */
DbConf.prototype.schemaTransfer = function(){
	return Transfer; 
}

/* Funcao para retornar o objeto sequelize */
DbConf.prototype.sequelize = function(){
	return sequelize;
}

/* Exportando a classe */
module.exports = function(){
	return DbConf;
}