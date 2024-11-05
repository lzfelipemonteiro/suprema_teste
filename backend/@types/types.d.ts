// types.d.ts ou no topo do seu arquivo .ts

import { FastifyRequest } from 'fastify';

interface MyJwtPayload {
  id: string;
  iat: number;
  exp: number;
}

// Estendendo FastifyRequest para incluir a propriedade `user`
declare module 'fastify' {
  interface FastifyRequest {
    user: MyJwtPayload
  }
}