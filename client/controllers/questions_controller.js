app.controller('QuestionsController', function(QuestionFactory, $location, $routeParams){
	var self = this;
	self.index = function(res){
		QuestionFactory.index(function(res){
			self.questions = res.data
		})

	}
	self.create = function(newQuestion){
		QuestionFactory.create(newQuestion, function(res){
			self.newQuestion = {}
			self.index();
			$location.url('/dashboard')
			
			// 
		})
	}
	self.show = function(){
		id = $routeParams.id
		QuestionFactory.show(id, function(res){
			// console.log($routeParams)
			self.question = res.data
			// self.question = res.data
			// self.index()			
		})
	}
})