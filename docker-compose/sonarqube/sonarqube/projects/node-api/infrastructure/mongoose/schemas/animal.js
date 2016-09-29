module.exports = {
	modelName: 'animal',
	schema: {
		name: 'string',
		picture: 'string',
			taxonomicRanking: {
			kingdom: 'string',
			phylum: 'string',
			class: 'string',
			order: 'string',
			family: 'string',
			genus: 'string',
			species: 'string'
		}
	}
}