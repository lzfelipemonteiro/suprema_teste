import { ComponentService } from '../services/component.service';
import { User } from '../models/userModel';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { AppError } from '../error/AppError';

export class ComponentController {
  constructor(private componentService: ComponentService) { }

  async getBasicComponents(req: FastifyRequest, res: FastifyReply): Promise<void> {
    const components = await this.componentService.getBasicComponents();

    return res.send(components);
  }

  async getSectionComponents(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply): Promise<void> {
    const { id } = req.params;

    const components = await this.componentService.getSectionComponents(id);

    return res.send(components);
  }
}