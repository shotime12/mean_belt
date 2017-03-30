var mongoose = require('mongoose')

var AnswerSchema = mongoose.Schema({
	answer: {
		type: String,
		required: true
	},
	likes: {
		type: Number,
		default: 0
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	_question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question',
		required: true
	}
}, {timestamps: true})

mongoose.model('Answer', AnswerSchema)