const fs = require('fs')

fs.stat('fs/sample.txt',(err,stat) => {
	if(err){
		console.log(err)
	}else{
		console.log('isFile'+stat.isFile())
		console.log('isDirectory'+stat.isDirectory())
		if(stat.isFile()){
			console.log('size' + stat.size)
			console.log('birthTime' + stat.birthtime)
			console.log('modified time ' + stat.mtime)
		}
	}
})