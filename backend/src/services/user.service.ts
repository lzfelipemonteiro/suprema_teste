// src/services/userService.ts
import { AppError } from '../error/AppError';
import { User } from '../models/userModel';
import { IUserRepository } from '../repositories/interfaces/IUserRepository';

export class UserService {
  constructor(private userRepository: IUserRepository) { }

  async createUser(userData: User): Promise<void> {
    await this.userRepository.createUser(userData);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.getUserById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.getUserByEmail(email);
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    return await this.userRepository.updateUser(id, userData);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.deleteUser(id);
  }

  async login(email: string, password: string): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.getUserByEmail(email);
    if (user && user.password !== password) {
      throw new AppError('Invalid password', 401);
    }

    const { password: _, ...userData } = user;

    return userData;
  }
}