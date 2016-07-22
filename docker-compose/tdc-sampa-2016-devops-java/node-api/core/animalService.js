var mongoose = require('mongoose');

module.exports = {
	getAnimals: getAnimals,
	addAnimal: addAnimal,
	updateAnimal: updateAnimal,
	removeAnimal: removeAnimal
}

function getAnimals(req, res, next){
	var animalModel = mongoose.model('animal');
	var queryObject = {};

	if(req.query.name)
		queryObject.name = new RegExp(req.query.name, "i")
  
	animalModel.count(queryObject, function(err, count){
		if(err){
			next({
				message: 'An error occour while trying to get records',
				moreInfo: err
			});
			return;
		}

		animalModel.find(queryObject, {}, { skip: req.headers.offset, limit: req.headers.limit }, function (err, records) {
			if(err){
				next({
					message: 'An error occour while trying to get records',
					developerMessage: err
				});
			}
			else{
				res.status(records.length ? 200 : 204);
				res.json({
					offset: req.headers.offset, 
					limit: req.headers.limit,
					count: count,
					records: records
				});
			}
		})
	})
}

function addAnimal(req, res, next){
	var animalModel = mongoose.model('animal');
	
	(new animalModel(req.body)).save(function (err, record) {
		if(err){
			next({
				message: 'An error occour while trying to save the new record',
				developerMessage: err
			});
		}
		else{
			res.status(200);
			res.json(record);
		}
	})
}

function updateAnimal(req, res, next){
	var animalModel = mongoose.model('animal'),
			animal = new animalModel(req.body);

	animalModel.findOneAndUpdate({_id: animal._id}, animal, function (err, oldValue, newValue) {
		if(err){
			next({
				message: 'An error occour while trying to save the new record',
				developerMessage: err
			});
		}
		else{
			res.status(200);
			res.json(newValue);
		}
	})
}

function removeAnimal(req, res, next){
	var animalModel = mongoose.model('animal');
	var queryObject = {};

	if(req.params.id)
		queryObject._id = req.params.id;

	animalModel.find(queryObject).remove().exec(function (err) {
		if(err){
			next({
				message: 'An error occour while trying to save the new record',
				developerMessage: err
			});
		}
		else{
			res.status(204);
			res.send();
		}
	});
}
