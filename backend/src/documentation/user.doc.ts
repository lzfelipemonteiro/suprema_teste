export const userRoutePostDoc = {
  description: 'Cria um novo usuário',
  tags: ['user'],
  summary: 'Cria um novo usuário no sistema',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
      is_admin: { type: 'boolean' }
    },
    required: ['name', 'email', 'phone', 'is_admin']
  },
  response: {
    201: {
      description: 'Usuário criado com sucesso',
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    }
  }
}