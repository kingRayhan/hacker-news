const server = require('./yoga/server')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const prisma = require('./prisma/prisma')

server.express.use(cookieParser())

server.express.use((req, res, next) => {
    let token = req.cookies.token
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET)
        req.userId = userId
    }

    next()
})

server.express.use(async (req, res, next) => {
    if (req.userId) {
        const user = await prisma.query.user({
            where: {
                id: req.userId,
            },
        })
        req.user = user
    }

    next()
})

server.start(
    {
        port: process.env.YOGA_SERVER_PORT || 4000,
        debug: false,
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    ({ port }) => {
        console.log(`Graphql server working at http://localhost:${port}`)
    }
)
