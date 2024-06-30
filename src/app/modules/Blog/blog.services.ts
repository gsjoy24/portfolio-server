import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import Blog from './blog.model';
import { TBlog } from './blog.types';

const createBlog = async (blog: TBlog) => {
  const createdBlog = await Blog.create(blog);
  return createdBlog;
};

const getBlog = async (id: string) => {
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return blog;
};

const getBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};

const updateBlog = async (id: string, blog: TBlog) => {
  const blogExist = await Blog.findById(id);
  if (!blogExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });
  return updatedBlog;
};

const deleteBlog = async (id: string) => {
  const blogExist = await Blog.findById;
  if (!blogExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  await Blog.findByIdAndDelete(id);
  return { message: 'Blog deleted successfully' };
};

const BlogServices = {
  createBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};

export default BlogServices;
