import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import ProfileServices from './profile.service';

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileServices.updateProfile(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully!',
    data: result,
  });
});

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileServices.getProfile();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile fetched successfully!',
    data: result,
  });
});

const ProfileControllers = {
  updateProfile,
  getProfile,
};

export default ProfileControllers;
