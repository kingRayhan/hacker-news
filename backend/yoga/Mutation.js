const { isURL, isEmail } = require('validator')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const Mutation = {
    async createPost(parent, args, { prisma, request }, info) {
        if (!request.user) throw new Error('Un authrorized')

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
    async signin(parent, args, { prisma, response }, info) {
        const [user] = await prisma.query.users({
            where: {
                OR: [{ username: args.user }, { email: args.user }],
            },
        })

        if (!user) throw new Error('User not found')

        const isMatched = await compare(args.password, user.password)

        let token
        if (isMatched) {
            token = sign({ userId: user.id }, process.env.APP_SECRET)
        } else throw new Error('Password did not match')

        await response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        })

        return user
    },
    async signup(parent, args, { prisma }, info) {
        // Validation
        if (!args.name.length) throw new Error('Name is required')
        if (!args.username.length) throw new Error('username is required')
        if (!isEmail(args.email)) throw new Error('Invalid email address')

        let password = await hash(args.password, 10)

        return prisma.mutation.createUser({
            data: {
                ...args,
                password,
            },
        })
    },
}

module.exports = Mutation
