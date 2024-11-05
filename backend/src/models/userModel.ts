// src/models/userModel.ts
export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface UserResponseDTO {
  id?: string;
  name: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}