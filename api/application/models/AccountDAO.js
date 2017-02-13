function AccountDAO(app, schema, sequelize){
	this._app = app;
	this._schema = schema;
	this._sequelize = sequelize;
}

/* Ler todos os usuarios cadastrados */ 
AccountDAO.prototype.readAllAccounts = function(req,res){
	
	this._schema.all()
			.then(function(data){
				console.log(JSON.stringify(data));
				res.status(200).json(data);
			})
			.catch(function(err){
				res.status(200).json(err);
			}).done();
	
}

/* Ler um usuario cadastrado */
AccountDAO.prototype.readOneAccount = function(req, res){
	
	this._schema.findById(req.params.id)
			.then(function(data){
				console.log(JSON.stringify(data));
				if(data != null){
					res.status(200).json(data);
				}else{
					res.status(200).json([{usuario: "Não foi encontrado nenhum usuario"}]);
				}
			})
			.catch(function(err){
				console.log('Erro: '+err);
				res.status(200).json([{info: "É necessario passar todos os parametros"}]);
			}).done();

}

/* Atualiza a conta do usuario baseado no id */
AccountDAO.prototype.updateAccount = function(req, res){
	
	this._schema.findById(req.params.id)
			.then(function(data){
				console.log(JSON.stringify(data));
				if(data != null){
					data.updateAttributes(req.body)
					res.status(200).json(data);
				}else{
					res.status(200).json([{usuario: "Não foi encontrado nenhum usuario"}]);
				}
			})
			.catch(function(err){
				console.log('Erro: '+err);
				res.status(200).json([{info: "É necessario passar todos os parametros"}]);
			}).done();
			
}

/* Atualiza a conta do usuario baseado no cpf */ 
AccountDAO.prototype.updateAccountCpf = function(req, res){
	
	this._schema.findOne({where: {cpf: req.params.cpf}})
			.then(function(data){
				console.log(JSON.stringify(data));
				if(data != null){
					data.updateAttributes(req.body)
					res.status(200).json(data);
				}else{
					res.status(200).json([{usuario: "Não foi encontrado nenhum usuario"}]);
				}
			})
			.catch(function(err){
				console.log('Erro: '+err);
				res.status(200).json([{info: "É necessario passar todos os parametros"}]);
			}).done();
			
}

/* Le um usuario a partir do cpf */
AccountDAO.prototype.readOneAccountCpf = function(req, res){
	
	this._schema.findOne({where: {cpf: req.params.cpf}})
			.then(function(data){
				console.log(JSON.stringify(data));
				if(data != null){
					res.status(200).json(data);
				}else{
					res.status(200).json([{usuario: "Não foi encontrado nenhum usuario"}]);
				}
			})
			.catch(function(err){
				console.log('Erro: '+err);
				res.status(200).json([{info: "É necessario passar todos os parametros"}]);
			}).done();

}

/* Verifica todas as trasnferencias feitas */
AccountDAO.prototype.allTransfers = function(req,res){

	this._schema.all()
			.then(function(data){
				console.log(JSON.stringify(data));
				if(data != null){
					res.status(200).json(data);
				}else{
					res.status(200).json([{transferencias: "Não existem transferencias disponiveis!"}]);
				}
			})
			.catch(function(err){
				console.log('Erro: '+err);
				res.status(200).json([{info: "É necessario passar todos os parametros"}]);
			}).done();
}

/* Le um transferencia feita */ 
AccountDAO.prototype.readOneTransfer = function(req, res){
	
	this._schema.findById(req.params.id)
			.then(function(data){
				console.log(JSON.stringify(data));
				if(data != null){
					res.status(200).json(data);
				}else{
					res.status(200).json([{transferencias: "Não existem transferencias disponiveis!"}]);
				}
			})
			.catch(function(err){
				console.log('Erro: '+err);
				res.status(200).json([{info: "É necessario passar todos os parametros"}]);
			}).done();

}

/* Cria uma transferencia baseada no saldo*/ 
AccountDAO.prototype.createTransfer = function(req,res){
	var fromSaldo = req.body.meuSaldo;
	var toSaldo = req.body.seuSaldo;
	var valueTransfer = req.body.valor_transferido;


	if(fromSaldo > valueTransfer){
		var query = this._schema.build(req.body);
		query.save().then(function(data){
			if(data != null){
				res.status(200).json(data);
			}else{
				res.status(200).json([{transferencias: "Não possivel realizar a transferencia!"}]);
			}

		}).catch(function(err){
			console.log('Erro: '+err);
			res.status(200).json([{info: "É necessario passar todos os parametros"}]);

		});

		var Accounts = new this._app.config.DbConf().schemaAccount();
		var deb = fromSaldo - valueTransfer;

		Accounts.findOne({where: {cpf: req.body.from_user_cpf}})
			.then(function(data){
				console.log(JSON.stringify(data));
				data.updateAttributes({saldo: deb})
			})
			.catch(function(err){
				console.log('Erro: '+err);
			}).done();

		var cred = toSaldo + valueTransfer;
		Accounts.findOne({where: {cpf: req.body.to_user_cpf}})
			.then(function(data){
				console.log(JSON.stringify(data));
				data.updateAttributes({saldo: cred})
			})
			.catch(function(err){
				console.log('Erro: '+err);
			}).done();


	}else{
		res.status(200).json([{info: "Saldo insuficiente"}]);
	}
}

module.exports = function(){
	return AccountDAO;	
}