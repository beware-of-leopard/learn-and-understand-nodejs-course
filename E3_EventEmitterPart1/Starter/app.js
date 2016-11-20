var Emitter = require('./emitter')

var emtr = new Emitter();

emtr.on('greet', function(){
	console.log('hey there')
})

emtr.on('greet', function(){
	console.log('another hello')
})

emtr.emit('greet');