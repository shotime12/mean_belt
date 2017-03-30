app.factory('UserFactory', function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/users').then(callback)
	}
	factory.create = function(newUser, callback){
		$http.post('/session', newUser).then(function(res){
			if(!res.data.error){
				factory.current_user = res.data
				$http.post('/users', newUser).then(callback)
			}
		})
		$http.post('/users', newUser).then(callback)
	}
	factory.session = function(callback){
		$http.get('/session').then(function(res){
			if(!res.data.error){
				factory.current_user = res.data
			}
			callback(res)
		})
	}
	factory.logout = function(callback){
		$http.post('/logout').then(callback)
	}
	return factory;
})