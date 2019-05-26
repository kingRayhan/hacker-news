const { Prisma } = require('prisma-binding')
require('dotenv').config()

const prisma = new Prisma({
    typeDefs: __dirname + '/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT
})

module.exports = prisma
