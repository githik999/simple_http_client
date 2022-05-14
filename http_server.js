const http = require('http')

const server = http.createServer()

server.listen(80)

server.on('connection',(socket)=>{
    console.log('a new TCP stream is established',socket.address())
})