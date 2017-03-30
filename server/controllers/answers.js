var mongoose = require('mongoose')
var Answers = mongoose.model('Answer')
var Questions = mongoose.model('Question')

module.exports = {
	index: function(req, res){
		Answers.find({'_question': req.params.id}).populate('_user').populate('_question').exec(function(err, doc){
			if (err){
				return res.json(err)
			}else {
				return res.json(doc)
			}
		})
	},
	create: function(req, res){
		// console.log('We made it')
		var answer = new Answers(req.body);
		answer.save(function(err, doc){
			if (err){
				return res.json(err)
			}
			Questions.findOne({'_id': answer._question}).exec(function(error, question){
				question.answers.push(answer._id)
				question.save(function(error, answer){
					if(err){
						return res.json(error)
					}
					return res.json(answer)
				})
			})
			// return res.json(doc)
		})	
	},
	show: function(req, res){
		console.log(req.body)
		Answers.findOne({'_id': req.params.id}).populate('_user').populate('_question').exec(function(err, doc){
			if (err){
				return res.json(err)
			}
			return res.json(doc)
		})
	},
	like: function(req, res){
		// console.log(req.params.id)
		Answers.findOne({'_id': req.params.id}).exec(function(err, answer){
			// console.log(answer)
			if(err){
				// console.log('error')
				return res.json(err)
			}
			answer.likes++
			// console.log(answer.likes)
			// console.log('works')
			answer.save({'likes': answer.likes})
			return res.json(answer)
		})
		// console.log(answer.like)
		
	}
}