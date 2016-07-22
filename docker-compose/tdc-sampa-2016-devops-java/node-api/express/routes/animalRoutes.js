module.exports = function(app){
  var animalService = require('../../core/animalService.js');

	app.route('/api/v1/animals')
		.get(animalService.getAnimals)
		.post(animalService.addAnimal)
		.delete(animalService.removeAnimal);

	app.route('/api/v1/animals/:id')
		.put(animalService.updateAnimal)
		.delete(animalService.removeAnimal);
}