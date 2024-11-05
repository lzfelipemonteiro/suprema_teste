import { AppError } from '../error/AppError';
import { prisma } from '../lib/prisma';
import { IComponentRepository } from "./interfaces/IComponentRepository";
import { ComponentTypes } from "../components/components";
import { SectionTypes } from "../components/pageCompoments";

export class ComponentRepository implements IComponentRepository {
  getBasicComponents(): Promise<any> {
    return Promise.resolve(ComponentTypes);
  }
  getSectionComponents(id: string): Promise<any> {
    return Promise.resolve(SectionTypes);
  }
}