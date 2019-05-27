const { forwardTo } = require('prisma-binding')

const Query = {
    comment: forwardTo('prisma'),
    comments: forwardTo('prisma'),
    commentsConnection: forwardTo('prisma'),
    post: forwardTo('prisma'),
    posts: forwardTo('prisma'),
    postsConnection: forwardTo('prisma'),

    async me(parent, args, { prisma, request }, info) {
        if (!request.user) return null
        const userId = response.userId
        return await prisma.query.user({ wheere: { id: userId } }, info)
    },
}

module.exports = Query
