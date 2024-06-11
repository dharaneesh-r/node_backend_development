const {readFile, createReadStream} = require('fs')
const http = require('http').createServer()

//solution 1 => fs & http modules

http.on('request', (req, res) => {
    //filesystem(fs) modules
    readFile('./testing.js', (err, data) => {
        if(err){
            res.end(err.message)
            console.log(err.message)
        }else{
            res.end(data)
            console.log('data successfully streamed!!!')
            console.log(req.url)
        }
    })

    //solution 2 =>  streaming(readable stream)

    const readable = createReadStream('./testing.js')
    readable.on('data', chunck => {
        res.write(chunck)
    })
    readable.on('end', () => {
        res.end()
    })
    readable.on('error', err => {
        console.log(err)
        res.end('This file not found !!!')
    })

    //solution 3 =>  PIPE operator(dublex or transform stream, or PIPE function())
    const pipereadableStream = createReadStream('./testing.js')
    pipereadableStream.pipe(res)
    //format reabablesource.pipe(writeable destination)
})

http.listen(8000, '127.0.0.1', () => {
    console.log('server getting started port 8000')
})


