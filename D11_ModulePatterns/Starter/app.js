var greet = require('./greet1')
greet()

var greet2 = require('./greet2').greet
greet2()

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "changed greet message";


//this will refer to the same object as greet3.
//the object return by require from this file is cached.
//so this greet call triggers the new greeting
var greet3b = require('./greet3');
greet3b.greet();


//function constructor passed to Greet4.
//because the new object is created in this
//file, objects created from it are unique.
var Greet4 = require('./greet4')
var grt = new Greet4();
grt.greet()
grt.greeting = "totally new greeting"

var grt2 = new Greet4();
grt2.greet();

var greet5 = require('./greet5')
greet5.greet()