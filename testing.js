const fs = require('fs')

setTimeout(() => console.log('timer 1 finished'),0)
setImmediate(() => console.log('immediate 1 finished'))

fs.readFile('./public/index.html',() => {
    console.log("I/O Finished")
})

console.log('hello from the top-level code')