var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
}, {timestamps: true})

mongoose.model('User', UserSchema)