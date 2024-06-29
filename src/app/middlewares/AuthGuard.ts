import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../DB';
import config from '../config';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';

const AuthGuard = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // check if the user send the token
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // check if the token is valid
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    const { id, email } = decoded;

    // check if the user is exist. If not, throw an error
    const user = await User.findOne({ _id: id, email });
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
    }

    req.user = decoded;
    next();
  });
};

export default AuthGuard;
