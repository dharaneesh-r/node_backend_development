const fs = require('fs')
const crypto = require('crypto')
// const http = require('http')

const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(()=> console.log('timer 1 finished'),0)
setImmediate(() => console.log('immediate 1 finished'))

fs.readFile('./public/index.html',() => {
    console.log("I/O Finished")
    console.log('--------------------------')

    setTimeout(() => console.log('timer 2 finished'),0)
    setTimeout(()=> console.log('timer 3 finished'),3000)
    setImmediate(() => console.log('immediate 2 finished'))
    //nexttick
    process.nextTick(() => console.log('process.nextTick'))
    //async
    crypto.pbkdf2('password','salt',100000,512,'sha512',() => {
        console.log(Date.now() - start,'password encrypted')
    })
    crypto.pbkdf2('password','salt',100000,512,'sha512',() => {
        console.log(Date.now() - start,'password encrypted')
    })
    crypto.pbkdf2('password','salt',100000,512,'sha512',() => {
        console.log(Date.now() - start,'password encrypted')
    })
    crypto.pbkdf2('password','salt',100000,512,'sha512',() => {
        console.log(Date.now() - start,'password encrypted')
    })
    //sync
    crypto.pbkdf2Sync('password','salt',100000,512,'sha512')
    console.log(Date.now() - start, 'password encrypted in sync Function')
    crypto.pbkdf2Sync('password','salt',100000,512,'sha512')
    console.log(Date.now() - start, 'password encrypted in sync Function')
    crypto.pbkdf2Sync('password','salt',100000,512,'sha512')
    console.log(Date.now() - start, 'password encrypted in sync Function')
    crypto.pbkdf2Sync('password','salt',100000,512,'sha512')
    console.log(Date.now() - start, 'password encrypted in sync Function')
})

console.log('hello from the top-level code')
///////////////////////////////////////////////////////


// const serverData = http.createServer((req, res) => {
//     if(req.url === '/'){
//         console.log('homepage')
//         res.end('homepage')
//     }else if(req.url === '/about'){
//         console.log('aboutpage')
//         res.end('aboutpage')
//     }
// })

// serverData.listen(3000, () =>{
//     console.log('serverData is getting started !!!')
// })


///////////////////////////////////////////
//testing to introduction

const randomNumber =  () => {
    console.log(Math.trunc(Math.random()*100) +1)
}
randomNumber()

module.exports = randomNumber