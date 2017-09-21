var buf1 = new Buffer(5)

for(var i=0; i<5; i++){
	buf1[i] = i + 97
}


var buf2 = new Buffer(5)
for(var i=0; i<5; i++){
	buf2[i] = i + 97 + 5
}

var concat = Buffer.concat([buf1,buf2])

console.log(concat.toString())
console.log(concat.toJSON())