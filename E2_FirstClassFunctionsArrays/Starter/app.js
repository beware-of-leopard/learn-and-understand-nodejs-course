//two essential concepts to understanding the node event emmitter

//1) that objects can be given a variable name to look up values
// ex: object[variableName]

//2) arrays can be comprised of functions that we can then loop through and call


//objects can be given variable names to look up properties
var object1 = {
	greet: function(){
		console.log("hello")
	}
}

var talk = "greet"

object1[talk]();

//arrays can be comprised of functions

var arrOfFunc = []

arrOfFunc.push(function(){
	console.log('hi there 0 ')
})

arrOfFunc.push(function(){
	console.log('hi there 1')
})

arrOfFunc.push(function(){
	console.log('hi there 2')
})

arrOfFunc.forEach(function(n){
	n();
})