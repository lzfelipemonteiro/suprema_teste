import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { apiService } from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,

      login: async (email: string, password: string) => {
        try {
          // TODO: Implementar chamada real à API
          const response = await apiService.login(email, password);

          if (!response.ok) {
            throw new Error('Falha na autenticação');
          }

          const data = await response.json();
          
          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Erro no login:', error);
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      setUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
        });
      },
    }),
    {
      name: 'auth-storage',
      skipHydration: true,
    }
  )
);