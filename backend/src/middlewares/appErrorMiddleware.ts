// src/middlewares/appErrorMiddleware.ts
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { AppError } from '../error/AppError'
import { ZodError } from 'zod'

export const errorHandler = (
  error: FastifyError,
  _req: FastifyRequest,
  reply: FastifyReply,
) => {
  // Se for erro da nossa aplicação
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      status: 'error',
      message: error.message,
    })
  }

  // Se for erro de validação do Zod
  if (error instanceof ZodError) {
    return reply.status(400).send({
      status: 'error',
      message: 'Validation error',
      details: error.format()
    })
  }

  // Log do erro não tratado
  console.error(error)

  // Erro interno do servidor
  return reply.status(500).send({
    status: 'error',
    message: 'Internal Server Error',
  })
}