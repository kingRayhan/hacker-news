const { forwardTo } = require('prisma-binding')

const Query = {
    comment: forwardTo('prisma'),
    comments: forwardTo('prisma'),
    commentsConnection: forwardTo('prisma'),
    post: forwardTo('prisma'),
    posts: forwardTo('prisma'),
    postsConnection: forwardTo('prisma'),
}

module.exports = Query
