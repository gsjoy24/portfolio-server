import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import BlogServices from './blog.services';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully!',
    data: result,
  });
});

const getBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getBlog(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully!',
    data: result,
  });
});

const getBlogs = catchAsync(async (_req: Request, res: Response) => {
  const result = await BlogServices.getBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully!',
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.updateBlog(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully!',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.deleteBlog(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully!',
    data: result,
  });
});

const BlogControllers = {
  createBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};

export default BlogControllers;
