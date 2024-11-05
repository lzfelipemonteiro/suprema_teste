// src/services/userService.ts
import { AppError } from '../error/AppError';
import { IComponentRepository } from '../repositories/interfaces/IComponentRepository';

export class ComponentService {
  constructor(private componentRepository: IComponentRepository) { }

  async getBasicComponents(): Promise<any> {
    return await this.componentRepository.getBasicComponents();
  }

  async getSectionComponents(id: string): Promise<any> {
    return await this.componentRepository.getSectionComponents(id);
  }
}