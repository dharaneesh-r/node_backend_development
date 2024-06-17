const http = require('http')
const fs = require('fs') 

const user = [
    {aimbition : 'billionaire'},
    {aimbition : 'millionaire'},
    {aimbition : 'privateJet'},
    {aimbition : 'luxuriouscar'},
    {aimbition : 'mansion'},
    {aimbition : 'yacht'},
    {aimbition : 'helicopter'},
    {aimbition : '600MillionDollars'}
]

//logger middleware

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`)
//     next()
// }

const server = http.createServer((req, res) => {
    try {
        //check if get request
        if(req.method === 'GET'){
            if(req.url === '/'){
                fs.readFile('./main.html', 'utf8', (err, data) => {
                    if(err){
                        console.log(err)
                        res.writeHead(500, {'content-type' : 'text/plain'})
                        res.end(err)
                    }else{
                        res.writeHead(200, {'content-type' : 'text/html'})
                        res.end(data)
                    }
                })
            }else if(req.url === '/about'){
                fs.readFile('./about.html','utf8', (err, data) => {
                    if(err){
                        console.log(err)
                        res.writeHead(500, {'content-type' : 'text/plain'})
                        res.end(err)
                    }else{
                        res.writeHead(200, {'content-type' : 'text/html'})
                        res.end(data)
                    }
                })
            }else if(req.url === '/api'){
                res.writeHead(200, {'content-type' : 'application/json'})
                console.log(JSON.stringify(user))
                res.end(JSON.stringify(user))
            }else{
                fs.readFile('./unknown.html', 'utf8', (err, data) => {
                    if(err){
                        console.log(err)
                        res.writeHead(500, {'content-type' : 'text/plain'})
                        res.end(err)
                    }else{
                        res.writeHead(200, {'content-type' : 'text/html'})
                        res.end(data)
                    }
                })
            }
        }else{
            throw new Error('Method not accessed')
        }
    }
    catch (error) {
        res.writeHead(500, {'content-type' : 'text/plain'})
        res.end('serrver errrrrorrrrrrr')
    }
})

server.listen(8080, '127.0.0.1', () => {
    console.log('server is running')
})