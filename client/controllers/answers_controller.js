app.controller('AnswersController', function(AnswerFactory, UserFactory, $location, $routeParams){
	var self = this;
	self.index = function(){
		id = $routeParams.id
		AnswerFactory.index(id, function(res){
			self.answers = res.data
			// console.log(res)
			// console.log(res.data)
		})
	}
	self.create = function(newAnswer){
		UserFactory.session(function(res){
			self.user = res.data
			// console.log(res.data)
			// console.log($routeParams.id)
			newAnswer._question = $routeParams.id
			newAnswer._user = res.data._id
			// console.log(res.data._id)
			// console.log(newAnswer)
			AnswerFactory.create(newAnswer, function(res){
			self.answer = res.data
			})
			$location.url('/question/'+$routeParams.id)
		})
		
	}
	self.like = function(id){
		// console.log(id)
		AnswerFactory.like(id, function(res){
			self.likes = res.data
			self.index()
		})
	}
})