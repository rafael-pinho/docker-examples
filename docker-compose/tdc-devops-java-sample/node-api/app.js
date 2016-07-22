'use strict';

var app = require('express')(),
	swagger = require('swagger-express-middleware'),
	environment = require('./configuration/environment.js'),
  path = require('path');

swagger(path.join(__dirname, '/configuration/swagger.json'), app, function(err, swaggerMiddleware) {
  if(err){
		console.error(err);
		process.exit(1);
	}

  app.use(
    swaggerMiddleware.metadata(),
    swaggerMiddleware.CORS(),
    swaggerMiddleware.files({
      apiPath: '/api/swagger',
      rawFilesPath: false
    }),
    swaggerMiddleware.parseRequest(),
    swaggerMiddleware.validateRequest()
  );

  require('./express/routes/healthCheck.js')(app);
  require('./express/routes/animalRoutes.js')(app);
  
  app.use(require('./express/middleware/notFound.js'))
  app.use(require('./express/middleware/error.js'))

  require('./infrastructure/mongoose/mongoose.js');

  app.listen(environment.port, function() {
    console.log(`App running at port ${environment.port}`);
  });
});