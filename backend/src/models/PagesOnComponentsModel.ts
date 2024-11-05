import { Page } from './PageModel';
import { Component } from './ComponentModel';

export interface PagesOnComponents {
  page: Page;
  pageId: string;
  component: Component;
  componentId: string;
  created_at?: Date;
  updated_at?: Date;
}