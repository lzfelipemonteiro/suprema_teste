/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance } from 'axios';
import { useAuth } from '../hooks/useAuth';

interface ApiError {
  message: string;
  status: number;
}

export interface ComponentType {
  id: string;
  name: string;
  slug: string;
  structure: {
    content: Array<{
      name: string;
      type: string;
      required: boolean;
      label: string;
    }>;
    styleOptions: Array<{
      name: string;
      type: string;
      key: string;
      default: string;
      options?: string[];
    }>;
  };
  defaultContent: Record<string, any>;
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de requisição
api.interceptors.request.use(
  (config) => {
    const token = useAuth.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de resposta
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const apiError: ApiError = {
      message: (error.response?.data as { message?: string })?.message || 'Erro inesperado',
      status: error.response?.status || 500,
    };

    if (apiError.status === 401) {
      useAuth.getState().logout();
    }

    return Promise.reject(apiError);
  }
);

// Endpoints
export const apiService = {
  // Auth
  login: async (email: string, password: string) => {
    const response = await api.post('/sign-in', { email, password });
    return response.data;
  },

  // Pages
  getPages: async () => {
    const response = await api.get('/pages');
    return response;
  },

  createPage: async (pageData: any) => {
    const response = await api.post('/pages', pageData);
    return response.data;
  },

  updatePage: async (pageId: string, pageData: any) => {
    const response = await api.put(`/pages/${pageId}`, pageData);
    return response.data;
  },

  deletePage: async (pageId: string) => {
    const response = await api.delete(`/pages/${pageId}`);
    return response.data;
  },

  // Sections
  getSections: async (pageId: string) => {
    const response = await api.get(`/pages/${pageId}/sections`);
    return response.data;
  },

  createSection: async (pageId: string, sectionData: any) => {
    const response = await api.post(`/pages/${pageId}/sections`, sectionData);
    return response.data;
  },

  updateSection: async (pageId: string, sectionId: string, sectionData: any) => {
    const response = await api.put(`/pages/${pageId}/sections/${sectionId}`, sectionData);
    return response.data;
  },

  deleteSection: async (pageId: string, sectionId: string) => {
    const response = await api.delete(`/pages/${pageId}/sections/${sectionId}`);
    return response.data;
  },

  getBasicComponents: async ():Promise<Record<string, ComponentType>> => {
    const response = await api.get('/components/basic');
    return response.data;
  },

  getSectionComponents: async () => {
    const response = await api.get('/components/section');
    return response.data;
  }
};

export default api;