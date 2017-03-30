app.factory('AnswerFactory', function($http){
	var factory = {};
	factory.index = function(id, callback){
		// console.log(id)
		$http.get('/answers/' +id).then(callback)
	}
	factory.create = function(newAnswer, callback){
		$http.post('/answers/', newAnswer).then(callback)
	}
	factory.like = function(id, callback){
		// console.log(id)
		$http.put('/answers/' + id).then(callback)
	}
	return factory;
})