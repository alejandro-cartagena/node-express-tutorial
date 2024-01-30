const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    else if (req.url === '/about') {
        res.end('About Page')
    }
    else {
        res.end(`
            <h1>Page not Found</h1>
            <a href="/">Back to Home Page</a>
        `)
    }
})

server.listen(5000)