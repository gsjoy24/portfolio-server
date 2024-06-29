import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../config';
import userData from '../modules/Profile/profile.constant';
import Profile from '../modules/Profile/profile.model';
import { TUser } from '../types/userInfo.types';

const UserSchema = new Schema<TUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<TUser>('User', UserSchema);

const seedUser = async () => {
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

  const userProfile = await Profile.findOne();
  if (!userProfile) {
    await Profile.create(userData);
  }
};

export default seedUser;
