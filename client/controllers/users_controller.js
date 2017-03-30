app.controller('UsersController', function(UserFactory, $location){
	console.log("creating")
	var self = this;
	self.session = function(res){
		UserFactory.session(function(res){
			if(res.data.error){
				$location.url('/')
			} else {
				self.current_user = res.data
			}
		})
	},
	self.logout = function(res){
		UserFactory.logout(function(res){
			self.user = res.data;
		})
		$location.url('/')
	}
	self.index = function(res){
		UserFactory.index(function(res){
			self.user = res.data;
		})
	}
	self.create = function(newUser){
		UserFactory.create(newUser, function(res){
			if (res.data.errors){
				var erors = res.data.errors
				for(key in errors){
					errors[key]['message']
					self.errors.push(errors[key]['message'])
				}
			}else{
				self.current_user = res.data
				$location.url('/dashboard')
			}

			self.newUser = {}
		})
	}
})