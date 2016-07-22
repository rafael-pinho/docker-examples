module.exports = function(req, res, next){
	next({
		status: 404,
		message: 'resource not found',
		moreInfo: {
			url: req.url,
			method: req.method,
			body: req.body,
			query: req.query
		}
	})
}