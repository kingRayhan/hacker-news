const { GraphQLServer } = require('graphql-yoga')
const prisma = require('../prisma/prisma')
const Mutation = require('./Mutation')
const Query = require('./Query')
const Comment = require('./Comment')

// Resolvers
const resolvers = {
    Query,
    Mutation,
    Comment,
}

// Graphql server
const server = new GraphQLServer({
    typeDefs: __dirname + '/schema.graphql',
    resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
    context: req => ({
        prisma,
        ...req,
    }),
})

module.exports = server
