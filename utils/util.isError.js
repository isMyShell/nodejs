const util = require('util')

console.log(util.isError(new Error()))

console.log(util.isError({a:11}))