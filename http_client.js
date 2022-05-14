const net = require('net')
const patience = 1000

const socket = new net.Socket()
socket.setTimeout(patience)

const options = 
{
    host:'192.168.1.3',
    port:80,
    family:4
}

socket.connect(options)

socket.on('connect',()=>{
    console.log('connect to server!')
    socket.write(data)
})

socket.on('data',(buf)=>{
    console.log('receive data',buf.toString())
})

socket.on('timeout',()=>{
    console.log('socket inactivity for too long')
    socket.destroy()
})

socket.on('close',(hadError)=>{
    console.log('socket close hadError',hadError)
})

socket.on('error',(err)=>{
    console.log('[ERR]',err.message)
})
