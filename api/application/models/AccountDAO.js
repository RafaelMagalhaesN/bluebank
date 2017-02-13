function AccountDAO(app, schema, sequelize){
	this._app = app;
	this._schema = schema;
	this._sequelize = sequelize;
}

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
				res.status(200).json(err);
			}).done();

}

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
				res.status(200).json(err);
			}).done();

}

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
				res.status(200).json(err);
			}).done();
}

module.exports = function(){
	return AccountDAO;	
}