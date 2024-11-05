import { User } from "../../models/userModel";

export interface IUserRepository {
  createUser(userData: User): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User>;
  updateUser(id: string, userData: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<void>;
}