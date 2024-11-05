import { FastifyInstance } from "fastify";

// * routes
import { userRoutes } from './user.routes'
import { componentsRoutes } from './components.routes'

export const routes = (app: FastifyInstance) => {
  app.register(userRoutes, { prefix: '/users' })
  app.register(componentsRoutes, { prefix: '/components' })
}