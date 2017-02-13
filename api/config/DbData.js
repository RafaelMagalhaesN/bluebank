/* 
* Import da lista de clients.json 
* Utilizada para popolaçao inicial do banco de dados
*/
var fs = require('fs');
var accounts = 	JSON.parse(fs.readFileSync('./config/accounts.json', 'utf8'));


/* Conexao com o banco de dados */
function DbData(app){
	this._app = app;
}

DbData.prototype.createData = function(){
	/* Instanciando os objetos sequelize e o schema */ 
	var sequelize = new this._app.config.DbConf().sequelize();
	var Account = new this._app.config.DbConf().schemaAccount();

	/* Populando o banco com os dados contidos no accounts.json */ 
	for(a in accounts){	
		console.log('Adicionando conta de: '+accounts[a].nome);

		var addAccount = Account.build({
			"cpf" :  accounts[a].cpf,
			"nome" : accounts[a].nome,
			"agencia" : accounts[a].agencia,
			"conta" : accounts[a].conta,
			"banco" : accounts[a].banco,
			"saldo" : accounts[a].saldo 
		});
		

		/* Salvando os dados */
		addAccount.save().then(function(data){
			console.log('Conta de criada!');
		}).catch(function(err){
			console.log('Erro: '+err);
		})
	}

}

/* Exportando a classe */
module.exports = function(){
	return DbData;
}