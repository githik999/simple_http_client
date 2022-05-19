const fs = require('node:fs')
const https = require('node:https')

const url = 'https://www.google.com/search?q=anj'

console.log(performance.now())
https.get(url, (res) => {
    console.log(performance.now(),res.statusCode,res.statusMessage)
    let rawData = ''
    res.on('data',(chunk)=>{
        rawData += chunk
    })
    res.on('end',()=>{
        console.log(performance.now())
        fs.writeFile('g.html',rawData,(err)=>{

        })
    })
})