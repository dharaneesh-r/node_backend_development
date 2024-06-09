const http = require('http');

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

const server = http.createServer((req, res) => {
    if(req.url === '/api' && req.url === 'GETS'){
        res.setHeader(200, {'content-type' : 'application/json'})
        res.write(JSON.stringify(user))
        res.end()
    }
})

// const PORT = process.env.PORTVAR

server.listen(3600, '127.0.0.1', () => {
    console.log('***...***...***...***')
})
