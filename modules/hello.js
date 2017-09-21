function Hello (){
	var name
	this.setName = function(bName){
		name = bName
	}
	this.sayName = function(){
		console.log(name)
	}
}

module.exports = Hello