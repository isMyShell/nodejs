var buf2 = new Buffer(26)

for(var i=0; i<26; i++){
	buf2[i] = i + 97
}

console.log(buf2.toJSON())
