var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'UsersController as UC'
	})
	.when('/question/:id', {
		templateUrl: 'partials/question.html'
	})
	.when('/new_question', {
		templateUrl: 'partials/new_question.html'
	})
	.when('/new_answer/:id', {
		templateUrl: 'partials/new_answer.html'
	})
})