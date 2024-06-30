import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import validateRequest from '../../middlewares/validateRequest';
import BlogControllers from './blog.controllers';
import createBlogValidation from './blog.validation';

const router = express.Router();

router.post(
  '/',
  AuthGuard(),
  validateRequest(createBlogValidation),
  BlogControllers.createBlog,
);

router.get('/', BlogControllers.getBlogs);

router.get('/:id', BlogControllers.getBlog);

router.put('/:id', AuthGuard(), BlogControllers.updateBlog);

router.delete('/:id', AuthGuard(), BlogControllers.deleteBlog);

const BlogRoutes = router;

export default BlogRoutes;
