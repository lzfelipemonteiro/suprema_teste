import { FastifyInstance } from 'fastify'
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/UserRepository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export async function userRoutes(app: FastifyInstance) {
  app.get('/', userController.getAllUsers.bind(userController))
  app.get('/:id', userController.getUserById.bind(userController))
  app.post('/sign-up', userController.createUser.bind(userController))
  app.put('/:id', userController.updateUser.bind(userController))
  app.delete('/:id', userController.deleteUser.bind(userController))
  // app.post('/sign-up', userController.createUser.bind(userController))
  app.post('/sign-in', userController.login.bind(userController))
}