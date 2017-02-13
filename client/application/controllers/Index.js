function Index(){

}

Index.prototype.index = function(req, res){
	res.status(200).render('sites/index');
}

module.exports = function() {
	return Index;
}