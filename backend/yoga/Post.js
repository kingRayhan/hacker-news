const Post = {
    async own(parent, args, { prisma, request }, info) {
        if (request.user) {
            return parent.author.id === request.user.id
        }
        return false
    },
}

module.exports = Post
