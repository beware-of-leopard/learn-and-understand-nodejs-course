function Emitter(){
	this.events = {}
}

//creates array for event type, that listeners are pushed into
Emitter.prototype.on = function(type, listener){
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener)
}

//loops through listeners in event type array, and calls each
Emitter.prototype.emit = function(type){
	if (this.events[type]){
		this.events[type].forEach(function(listener){
			listener()
		})
	}
}

module.exports = Emitter;