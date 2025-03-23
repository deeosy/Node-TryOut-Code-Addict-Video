let http = require('http')
let fs = require('fs')

http.createServer(function(req, res){
    // const text = fs.readFileSync('./content/big.txt', 'utf8') // this gets a large file size upon responses
    // res.end(text)

    // this method below shows how to use the http-stream which breaks down the response data into chucks of data (small bits of data) for efficiency
    const fileStream =fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open',() => {
      fileStream.pipe(res)  // the pipe method is pushing from the read stream to the write stream
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
}).listen(5000)