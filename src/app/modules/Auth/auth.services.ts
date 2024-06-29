import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../../DB';
import config from '../../config';
import AppError from '../../errors/AppError';
import { TUser } from '../../types/userInfo.types';
import { createToken } from './auth.utils';

const login = async (payload: TUser) => {
  const { email, password } = payload;

  // check if the user is exist
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'Enter the correct email!');
  }

  // check if the password is correct
  const isPasswordMatch = await bcrypt.compare(password, user?.password);

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, 'Wrong password!');
  }

  const jwtPayload = {
    id: user?._id,
    email: user?.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expiration as string,
  );

  return accessToken;
};

const changePassword = async (
  userData: JwtPayload,
  payload: {
    oldPassword: string;
    newPassword: string;
  },
) => {
  const { oldPassword, newPassword } = payload;

  // check if the user is exist
  const user = await User.findOne({
    _id: userData.id,
    email: userData.email,
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }

  // check if the password is correct
  const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not match!');
  }

  const hashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.bcrypt_salt_round),
  );

  const result = await User.findOneAndUpdate(
    {
      _id: user.id,
      email: user.email,
    },
    {
      password: hashedPassword,
    },
  );

  return result;
};

const AuthServices = {
  login,
  changePassword,
};

export default AuthServices;
