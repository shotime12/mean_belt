var mongoose = require('mongoose')

var QuestionSchema = mongoose.Schema({
	question: {
		type: String, 
		required: true
	},
	description: {
		type: String,
	},
	answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answer'
	}]
}, {timestamps: true})

mongoose.model('Question', QuestionSchema)