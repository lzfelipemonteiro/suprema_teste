/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

interface Page {
  id: string;
  title: string;
  sections: Section[];
}

interface Section {
  id: string;
  type: string;
  content: any;
  style: any;
}

interface PageStore {
  pages: Page[];
  currentPage: Page | null;
  setCurrentPage: (page: Page) => void;
  addPage: (page: Page) => void;
  updatePage: (page: Page) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  pages: [],
  currentPage: null,
  setCurrentPage: (page) => set({ currentPage: page }),
  addPage: (page) => set((state) => ({ pages: [...state.pages, page] })),
  updatePage: (page) => 
    set((state) => ({
      pages: state.pages.map((p) => (p.id === page.id ? page : p)),
    })),
}));