var http = require('client-http'),
		configuration = require('../configuration/environment.js');

module.exports = {
	ping: pingJavaApi
}

function pingJavaApi(req, res, next){
	http.get(configuration.javaApiPath, function(data){
		  console.log(data);
			res.send(data);
	});
}