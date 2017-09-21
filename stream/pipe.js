const fs = require('fs')

let rs = fs.createReadStream('stream/sample1.js')
let ws = fs.createWriteStream('stream/copied.txt')

rs.pipe(ws)