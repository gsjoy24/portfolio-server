/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
