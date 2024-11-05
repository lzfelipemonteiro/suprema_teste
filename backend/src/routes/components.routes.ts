import { FastifyInstance } from 'fastify'
import { ComponentController } from '../controllers/ComponentController';
import { ComponentService } from '../services/component.service';
import { ComponentRepository } from '../repositories/ComponentRepository';

const componentRepository = new ComponentRepository();
const componentService = new ComponentService(componentRepository);
const componentController = new ComponentController(componentService);

export async function componentsRoutes(app: FastifyInstance) {
  app.get('/basic', componentController.getBasicComponents.bind(componentController))
  app.get('/section', componentController.getSectionComponents.bind(componentController))
  // app.post('/', userController.createUser.bind(userController))
  // app.put('/:id', userController.updateUser.bind(userController))
  // app.delete('/:id', userController.deleteUser.bind(userController))
}