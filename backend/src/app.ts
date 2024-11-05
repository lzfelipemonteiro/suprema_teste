import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { routes } from './routes'
import { errorHandler } from './middlewares/appErrorMiddleware'

export const app = fastify({
  logger: true,
})

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
})

app.register(jwt, {
  secret: process.env.JWT_SECRET || 'defaultSecret',
})

export async function authenticate(req: FastifyRequest, res: FastifyReply) {
  try {

    const publicRoutes = ['/users/sign-up', '/users/sign-in'];

    // if (publicRoutes.includes(req.url)) {
    //   return
    // }

    // await req.jwtVerify()
  } catch (error) {
    res.send(error)
  }
}

app.addHook('preHandler', authenticate)

app.setErrorHandler(errorHandler)

routes(app)
