import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './signup.model';

@Injectable()
export class UserService {
  findByEmail(email: string) {
      throw new Error('Method not implemented.');
  }
  validatePassword(user: any, password: string) {
      throw new Error('Method not implemented.');
  }
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(username: string, email: string, password: string): Promise<User> {
    const newUser = new this.userModel({ username, email, password });
    return await newUser.save();
  }
}
