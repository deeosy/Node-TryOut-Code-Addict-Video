const http = require('http')

// const server =http.createServer((req, res) => { // req is the server requesting info from the website whiles res is the server providing the info to the website
//     console.log();
    
//     res.write('Welcome to our homepage')
//     res.end()
// })

const server =http.createServer((req, res) => { // req is the server requesting info from the website whiles res is the server providing the info to the website
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to the about page')
    }
    else res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
}) 

server.listen(5000, ()=>console.log(`live on http://localhost:5000`))