module.exports = function (app) {
	app.get('/', function(req,res){
		new app.application.controllers.Index().index(req, res);
	});
}