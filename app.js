const fastify  =  require('fastify')({
    logger: true
})

const validate = require('./utils/validate')
const request = require('./utils/request')
const schema = require('./schema')

const PORT = 4001

fastify.register(require('fastify-url-data'))

fastify.addHook('onRequest', async (req, reply) => {
    const { path, query } = req.urlData()
    const data = await request(path, { query })
    
    if(data) {
        const json = JSON.parse(data)
        if(typeof json === 'object') {
            const res = validate(schema[path], json.data.data)
            reply.send(res)
            reply.send(res)
        }
    }
})

fastify.listen(PORT, function(err, address) {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }

    fastify.log.info(`Server listening on ${address}`)
})