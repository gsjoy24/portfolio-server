import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../config';
import { TUser } from '../types/userInfo.types';

const UserSchema = new Schema<TUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<TUser>('Admin', UserSchema);

const seedSuperAdmin = async () => {
  const password = await bcrypt.hash(
    config.user_password,
    Number(config.bcrypt_salt_round),
  );
  const data = {
    email: config.user_email,
    password,
  };

  const userExists = await User.findOne({
    email: config.user_email,
  });
  if (!userExists) {
    await User.create(data);
  }
};

export default seedSuperAdmin;
