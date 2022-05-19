const https = require('node:https')

const url = 'https://www.google.com/'

console.log(performance.now())
https.get(url, (res) => {
    console.log(performance.now())
})