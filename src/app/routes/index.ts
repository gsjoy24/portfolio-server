import { Router } from 'express';
import AuthRoutes from '../modules/Auth/auth.routes';
import BlogRoutes from '../modules/Blog/blog.routes';
import ProfileRoutes from '../modules/Profile/profile.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
