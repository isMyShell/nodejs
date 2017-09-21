const fs = require('fs')

let data = 'hello node sync'

fs.writeFileSync('fs/output.txt',data)
