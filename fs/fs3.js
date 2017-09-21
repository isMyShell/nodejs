const fs = require('fs')

var data = 'hello node js'
fs.writeFile('fs/output.txt',data,(err) => {
	if(err){
		console.log(err)

	}else{
		console.log('ok')
	}
})