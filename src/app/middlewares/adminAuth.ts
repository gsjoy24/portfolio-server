import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import { Admin } from '../modules/Admin/admin.model';
import catchAsync from '../utils/catchAsync';

const adminAuth = (onlySuperAdmin?: string) => {
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

    // check if the user is super admin
    if (
      onlySuperAdmin === 'onlySuperAdmin' &&
      decoded.email !== config.super_admin_email
    ) {
      throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized!');
    }

    const { id, email, role } = decoded;

    // check if the user is admin
    if (role !== 'admin') {
      throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized!');
    }

    // check if the user is exist. If not, throw an error
    const admin = await Admin.findOne({ _id: id, email });
    if (!admin) {
      throw new AppError(httpStatus.NOT_FOUND, 'The admin is not found');
    }

    req.adminData = decoded as JwtPayload;
    next();
  });
};

export default adminAuth;
