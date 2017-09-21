const util = require('util')

function Base(){
	this.name = 'base'
	this.sayName = function(){
		console.log(`hello my name is ${this.name}`)
	}
}
Base.prototype.showName = function(){
	console.log(`${this.name}`)
}


function Sub(){
	this.name = 'sub'
}

util.inherits(Sub, Base)

let baseObj = new Base()
let subObj = new Sub()

baseObj.sayName()
baseObj.showName()
console.log(baseObj)

subObj.showName()
// subObj.sayName()
console.log(subObj)

