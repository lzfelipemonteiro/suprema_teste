import 'dotenv/config'
import 'reflect-metadata';
import { app } from './app'

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then((address) => console.log(`Server is listening on ${address}`))

