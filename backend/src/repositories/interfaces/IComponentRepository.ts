import { Component } from "../../models/ComponentModel";

export interface IComponentRepository {
  getBasicComponents(): Promise<any>;
  getSectionComponents(id: string): Promise<any>;
}