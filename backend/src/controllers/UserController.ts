import { UserService } from '../services/user.service';
import { User } from '../models/userModel';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { AppError } from '../error/AppError';

export class UserController {
  constructor(private userService: UserService) { }

  async createUser(req: FastifyRequest, res: FastifyReply): Promise<void> {
    const createUserSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    });

    const { name, email, password } = createUserSchema.parse(req.body);

    try {
      const user = await this.userService.createUser({ name, email, password });

      return res.send(user);
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, 400);
      }
      throw error;
    }
  }

  async getAllUsers(req: FastifyRequest, res: FastifyReply): Promise<void> {
    const users = await this.userService.getAllUsers();

    return res.send(users);
  }

  async getUserById(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply): Promise<void> {
    const { id } = req.params;

    const user = await this.userService.getUserById(id);

    return res.send(user);
  }

  async updateUser(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply): Promise<void> {
    const { id } = req.params;
    const userData: Partial<User> = req.body as Partial<User>;

    const user = await this.userService.updateUser(id, userData);

    return res.send(user);
  }

  async deleteUser(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply): Promise<void> {
    const { id } = req.params;

    await this.userService.deleteUser(id);

    return res.send();
  }

  // src/controllers/user.controller.ts
  async login(req: FastifyRequest, res: FastifyReply): Promise<void> {
    const loginSchema = z.object({
      email: z.string().email('Email inválido'),
      password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    });

    const { email, password } = loginSchema.parse(req.body);

    try {
      const user = await this.userService.login(email, password);

      const token = await res.jwtSign(
        {
          id: user.id,
          email: user.email,
        },
        {
          sign: {
            sub: user.id,
            expiresIn: '7d',
          },
        },
      );

      return res.status(200).send({
        user,
        token,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, 401);
      }
      throw error;
    }
  }
}