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

HomeController.prototype.oneAccountCpf  = function(req, res){
	AccountDAO.readOneAccountCpf(req, res);
}

HomeController.prototype.allTransfers  = function(req, res){
	AccountDAO.allTransfers(req, res);
}


module.exports = function(){
	return HomeController;
}