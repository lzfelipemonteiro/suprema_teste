import { AppError } from '../error/AppError';
import { prisma } from '../lib/prisma';
import { User } from "../models/userModel";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  async createUser(userData: User): Promise<User> {
    const user = await prisma.user.create({
      data: userData,
    });

    return user;
  }
  getAllUsers(): Promise<User[]> {
    const users = prisma.user.findMany();

    return users;
  }
  async getUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
  async getUserByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
  updateUser(id: string, userData: Partial<User>): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}