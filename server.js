//
var express = require('express')
//gets post data from clients
var bp =  require('body-parser')
var path = require('path')
var session = require('express-session')
var root = __dirname

var app = express();

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
	rolling: true
}))
//tells our server to get the static content for various folders
app.use(express.static(path.join(root, 'client')))
app.use(express.static(path.join(root, 'bower_components')))
app.use(express.static(path.join(root, 'node_modules')))
app.use(bp.json())

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000, function(){
	console.log('listening in port 8000')
})