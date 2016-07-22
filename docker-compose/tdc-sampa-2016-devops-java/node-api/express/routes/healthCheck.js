module.exports = function(app){
  var javaService = require('../../core/javaService.js');

	app.get('/api/v1/ping/node', function(req, res, next){
		res.status(200).send(new Date());
	});

	app.get('/api/v1/ping/java', javaService.ping);
}