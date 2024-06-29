import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
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

const AuthServices = {
  login,
};

export default AuthServices;
