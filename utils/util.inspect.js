const util = require('util')

function Base(name){
	this.name = name
	this.sayName = function(){
		console.log(this.name)
	}
}

Base.prototype.showName = function(){
	console.log('sssss' + this.name)
}

var obj = new Base('yiqi')

console.log(util.inspect(obj))

console.log(util.inspect(obj,true))