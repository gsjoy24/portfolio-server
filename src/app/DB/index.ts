import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../config';
import { TUserName } from '../types/userInfo.types';

const UserSchema = new Schema<TUserName>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<TUserName>('Admin', UserSchema);

const seedSuperAdmin = async () => {
  const password = await bcrypt.hash(
    config.user_password,
    Number(config.bcrypt_salt_round),
  );
  const data = {
    email: config.user_email,
    password,
  };

  const userExists = await UserModel.findOne({
    email: config.user_email,
  });
  if (!userExists) {
    await UserModel.create(data);
  }
};

export default seedSuperAdmin;
