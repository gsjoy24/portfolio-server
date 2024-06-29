import { Router } from 'express';
import AuthRoutes from '../modules/Auth/auth.routes';
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
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
