/*var mod1 = require('./module1.js');
console.log(mod1.add(2,3));
console.log(mod1.double(4));*/

var Calculate = require('./module1.js');
var C1 = new Calculate(2);
console.log(C1.double() +"--"+C1.zero());