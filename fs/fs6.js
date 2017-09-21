const fs = require('fs')

var stat = fs.statSync('fs/sample.txt')

console.log(stat)