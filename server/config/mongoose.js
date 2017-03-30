var mongoose = require('mongoose')
//allows us to read and write content for responses
var fs =  require('fs')

var path = require('path')

mongoose.connect('mongodb://localhost/questions_update2')

mongoose.Promise = global.Promise

var models_path = path.join(__dirname, '/../models')

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>= 0){
		require(models_path + '/' + file)
	}
	// console.log('loading' + file + '...')
})