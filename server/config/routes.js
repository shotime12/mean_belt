console.log('routes')
var users =  require('../controllers/users.js')
var questions =  require('../controllers/questions.js')
var answers = require('../controllers/answers.js')


module.exports = function(app){
	app.get('/users', users.index),
	app.post('/users', users.create),
	app.post('/logout', users.logout),
	app.get('/session', users.session),
	app.post('/session', users.session),
	app.get('/questions', questions.index),
	app.post('/questions', questions.create),
	app.get('/questions/:id', questions.show),
	app.get('/answers/:id', answers.index),
	app.post('/answers', answers.create),
	app.put('/answers/:id', answers.like)
	// app.get('/answers/', answers.show)
}