// hooks/useComponents.ts
import { create } from 'zustand';
import { apiService, ComponentType } from '../services/api';

interface ComponentsStore {
  components: Record<string, ComponentType>;
  loading: boolean;
  error: string | null;
  fetchComponents: () => Promise<void>;
}

export const useComponents = create<ComponentsStore>((set) => ({
  components: {},
  loading: false,
  error: null,
  fetchComponents: async () => {
    set({ loading: true });
    try {
      const components = await apiService.getBasicComponents();
      set({ components, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));