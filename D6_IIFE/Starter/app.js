// Your Javascript Code Goes Here

//illustrate IIFE mimicking modules
//first console.log will be "penguin", then "otter"

var animal = "otter";

(function(){
	var animal = "penguin"
	console.log(animal)
})()

console.log(animal)