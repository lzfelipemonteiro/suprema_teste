import { PagesOnComponents } from './PagesOnComponentsModel';

export interface Page {
  id?: string;
  title: string;
  components: PagesOnComponents[];
  isPublished: boolean;
  created_at?: Date;
  updated_at?: Date;
}