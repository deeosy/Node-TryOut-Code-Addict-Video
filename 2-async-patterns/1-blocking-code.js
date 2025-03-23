const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        // problem will be if we set up a blocking code!!! so what is a blocking code ??? eg is a for loop
        for(let i = 0; i< 100; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`);
                
            }
        }
        res.end('About Page')
    }
    res.end('Error Page')
})

server.listen(5000, () =>  console.log('server live on port 5000...'))