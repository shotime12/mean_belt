var mongoose = require('mongoose')
var Users = mongoose.model('User')

console.log('UsersController')

module.exports = {
	index: function(req, res){
		Users.find({}).exec(function(err, doc){
			if (err){
				return res.json(err)
			}
			return res.json(doc)
		})
	},
	create: function(req, res){
		var user = new Users(req.body);
		Users.findOne({'name': req.body.name}).exec(function(err, doc){
			if (doc){
				req.session.user = doc;
				return res.json(doc)
			} else {
				user.save(function(err, doc){
					if (err){
						return res.json(err)
					}
					req.session.user = doc
					return res.json(doc)
				})
			}
		})
	},
	session: function(req, res){
		if(!req.session.user){
			return res.json({
				"error": "Please enter your name"
			})
		}
		return res.json(req.session.user)
	},
	logout: function(req, res){
		req.session.user = null
		return res.json(req.session.user)
	}
}