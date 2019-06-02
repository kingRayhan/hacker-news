const { isURL, isEmail } = require('validator')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

module.exports = {
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
    logout(parent, args, { response }, info) {
        response.clearCookie('token')
        return true
    },
}
