const http = require('http')
const querystring = require('querystring')

const BASE_URL = '118.24.155.105'
const BASE_PORT = 4000
const BASE_API='/api/v1'

const request = (url, options = {}) =>  new Promise((resolve) => {
    options = {
        method: 'get',
        ...options
    }

    if(options.query) {
        options.url = `${url}?${options.query}`
    } 

    return http[options.method]({
        host: BASE_URL,
        port: BASE_PORT,
        path: `${BASE_API}${options.url}`,
    }, (res) => {
        let rawData = ''
        
        res.on('data',  (chunk) => {
            rawData += chunk
        })
        
        res.on('end',  () => {
            resolve(rawData)
        })
    })
})

module.exports = request