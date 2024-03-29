import { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}

export const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});