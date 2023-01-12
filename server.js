'use strict'

const server = require('./app')({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  }
})

server.listen({ host: '127.0.0.1', port: process.env.PORT || 3001 })
