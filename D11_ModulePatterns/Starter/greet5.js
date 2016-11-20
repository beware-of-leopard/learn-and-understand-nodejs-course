//revealing module pattern

var greeting = "greeting greeting greeting"

function greet(){
	console.log(greeting)
}

module.exports = {
	greet: greet
}