const http = require('http')

// console.log(http)

const server = http.createServer((req, res) => {
    // res.setHeader('content-type', 'text/html')
    // res.statusCode = 200
    // res.write('<h1>hello world</h1>')
    res.writeHead(200,{'content-type' : 'text/html'})
    res.write('<h1>This is Investoproweal.com</h1>');

    console.log(req.url) //checking that what are the urls are used in website
    console.log(req.method) //to check what http method is used in website
    // res.writeHead(200, {'content-type' : 'application/json'})
    // res.write(JSON.stringify({candidate : 'DHARANEESH'}))
    res.end()
})

const PORT = process.env.PORT
server.listen(PORT, '127.0.0.1', () => {
    console.log(`listening server on port ${PORT}`)
})