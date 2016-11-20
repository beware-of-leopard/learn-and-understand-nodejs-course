//demo diff between module.exports & exports
//the '=' here changes the place in memory exports
//points to. It no longer references the exact 
//same place as module.exports

exports = function(){
	console.log('hello')
}

console.log(exports)
//function

console.log(module.exports)
//empty object

