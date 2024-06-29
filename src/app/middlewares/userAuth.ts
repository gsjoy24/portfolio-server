import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import { User } from '../modules/User/User.model';
import catchAsync from '../utils/catchAsync';

const userAuth = () => {
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

    const { id, email, role } = decoded;

    if (role !== 'user') {
      throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized!');
    }

    // check if the user is exist. If not, throw an error
    const user = await User.findOne({ _id: id, email });
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'The user is not found');
    }

    req.userData = decoded as JwtPayload;
    next();
  });
};

export default userAuth;
