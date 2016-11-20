function Greeter (){
	this.greeting = "greeting added via function constructor";
	this.greet = function(){
		console.log(this.greeting);
	}
}

//replace module.exports with new object
module.exports = new Greeter();