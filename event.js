//eventEmitter modules

const EventEmitter = require('events')
const http = require('http')

console.log(EventEmitter)  //just for testing

// class sales extends EventEmitter{
//     constructor(){
//         super();
//     }
// }

const newEvent = new EventEmitter();

console.log('newEvent ===>>>>', newEvent) //testing for testing 

newEvent.on('investoproweal', () => { //newEvent.on refers to the server
    console.log('There was a new website -> investoproweal')
})
newEvent.on('investoproweal',() => {
    console.log('It was created by DHARANEESH R')
})

newEvent.on('investoproweal', networth => {
    console.log(`this is my networth --> $${networth} in my age of 25`)
})

newEvent.emit('investoproweal',10000000000)

//////////////////////////////////////////////////////////////////

const server = http.createServer();

//another http modules using eventEmitter modules

server.on('request',(req, res) => {
    console.log('request received')
    console.log(req.url)
    res.end('request received')
})

server.on('request', (req, res) => {
    console.log('another request received')
})

server.on('close', () => {
    console.log('server closed')
})

server.listen(5000, '127.0.0.1',() =>{
    console.log('server is getting started and waiting for request....')
})