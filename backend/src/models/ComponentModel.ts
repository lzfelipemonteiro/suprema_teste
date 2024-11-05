import { PagesOnComponents } from "./PagesOnComponentsModel";

// src/models/userModel.ts
export interface Component {
  id?: string;
  name: string;
  slug: string;
  type: string;
  isActivate: boolean;
  pages: PagesOnComponents[];
  password: string;
  created_at?: Date;
  updated_at?: Date;
}