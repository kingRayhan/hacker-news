const { isURL } = require('validator')

const Auth = require('./authentications')
const Mutation = {
    async createPost(parent, args, { prisma, request }, info) {
        if (!request.user)
            throw new Error('Login is requred for creating a link')

        if (!args.title.length)
            // Validation
            throw new Error('Title is required')
        if (!args.url.length) throw new Error('Url is required')
        if (!isURL(args.url)) throw new Error('Url is not valid')

        // Store to db
        return await prisma.mutation.createPost(
            {
                data: {
                    ...args,
                    author: {
                        connect: {
                            id: request.user.id,
                        },
                    },
                },
            },
            info
        )
    },
    async updatePost(parent, args, { prisma }, info) {
        // Validation
        if (!args.title.length) throw new Error('Title is required')
        if (!args.url.length) throw new Error('Url is required')
        if (!isURL(args.url)) throw new Error('Url is not valid')

        // Store// Store to db
        return await prisma.mutation.updatePost(
            {
                data: {
                    ...args,
                },
                where: {
                    id: args.id,
                },
            },
            info
        )
    },
    async deletePost(parent, args, { prisma }, info) {
        return await prisma.mutation.deletePost(
            {
                where: {
                    id: args.id,
                },
            },
            info
        )
    },
    async createComment(parent, args, { prisma, request }, info) {
        if (!request.user)
            throw new Error('Login is requred for creating a Comment')

        return await prisma.mutation.createComment(
            {
                data: {
                    body: args.body,
                    post: {
                        connect: {
                            id: args.postId,
                        },
                    },
                    author: {
                        connect: {
                            id: request.user.id,
                        },
                    },
                },
            },
            info
        )
    },
    ...Auth,
}

module.exports = Mutation
