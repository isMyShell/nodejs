const fs = require('fs')

let ws = fs.createWriteStream('stream/output1.txt','utf-8')

ws.write('使用creatWriteSteam写入数据\n')
ws.write('aaa...\n')
ws.write('bbb...\n')
ws.write('ccc...\n')
ws.write('END...\n')
ws.end()