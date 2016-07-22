var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
		mongodbConnectionString = require('../../configuration/environment.js').mongodb,
    path = require('path'),
    fs = require('fs');

mongoose.connect(mongodbConnectionString); 

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + mongodbConnectionString);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

fs.readdir(path.join(__dirname, '/schemas'), function(err, filenames) {
  if (err) {
    console.log(err);
    process.exit(0); 
  }

  for(var i = 0; i < filenames.length; i++){
    var definitions = require(`./schemas/${filenames[i]}`);
    mongoose.model(definitions.modelName, new Schema(definitions.schema));
  }
});