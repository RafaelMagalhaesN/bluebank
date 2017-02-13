var AccountDAO,
	sequelize;

function HomeController(app, schema){
	this._app = app;
	sequelize = new app.config.DbConf().sequelize();
	AccountDAO = new app.application.models.AccountDAO(app, schema, sequelize);
	
}

HomeController.prototype.allAccounts = function(req, res){
	AccountDAO.readAllAccounts(req, res);
}

HomeController.prototype.oneAccount  = function(req, res){
	AccountDAO.readOneAccount(req, res);
}

HomeController.prototype.updateAccount  = function(req, res){
	AccountDAO.updateAccount(req, res);
}

HomeController.prototype.updateAccountCpf  = function(req, res){
	AccountDAO.updateAccountCpf(req, res);
}

HomeController.prototype.oneAccountCpf  = function(req, res){
	AccountDAO.readOneAccountCpf(req, res);
}

HomeController.prototype.allTransfers  = function(req, res){
	AccountDAO.allTransfers(req, res);
}

HomeController.prototype.oneTransfer  = function(req, res){
	AccountDAO.readOneTransfer(req, res);
}

HomeController.prototype.createTransfer  = function(req, res){
	AccountDAO.createTransfer(req, res);
}


module.exports = function(){
	return HomeController;
}