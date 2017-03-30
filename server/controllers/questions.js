var mongoose = require('mongoose')
var Questions = mongoose.model('Question')

console.log('QuestionController')

module.exports = {
	index: function(req, res){
		Questions.find({}).exec(function(err, doc){
			if (err){
				return res.json(err)
			}
			return res.json(doc)
		})
	},
	create: function(req, res){
		var question = new Questions(req.body);
		question.save(function(err, doc){
			if (err){
				return res.json(err)
			}
			return res.json(doc)
		})
	},
	show: function(req, res){
		// console.log(req.body)
		Questions.findOne({'_id': req.params.id}).exec(function(err, doc){
			if (err){
				return res.json(err)
			}
			req.session.question = req.params.id
			return res.json(doc)
		})
	}
}