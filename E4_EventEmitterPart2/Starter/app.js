//same code as custom emitter from E3, but now requiring built in node event emitter
var Emitter = require('events')

//to avoid depending on "magic strings". also allows us to change name of event in one place.
var eventsConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventsConfig.GREET, function(){
	console.log('hey there')
})

emtr.on(eventsConfig.GREET, function(){
	console.log('another hello')
})

emtr.emit(eventsConfig.GREET);