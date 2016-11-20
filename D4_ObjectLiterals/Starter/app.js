// Your Javascript Code Goes Here

function Person (firstName, lastName){
	this.firstName = firstName
	this.lastName = lastName
}

Person.prototype.greet = function(){
	console.log("Hi " + this.firstName + this.lastName)
}

var john = new Person('john','doe')

john.greet()