import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.routes';
import { AdminAuthRoutes } from '../modules/Auth/AdminAuth.routes';
import { UserAuthRoutes } from '../modules/Auth/userAuth.routes';
import CategoryRoutes from '../modules/Category/Category.routes';
import { CouponRoutes } from '../modules/Coupon/Coupon.routes';
import { OrderRoutes } from '../modules/Order/Order.routes';
import { ProductRoutes } from '../modules/Product/Products.routes';
import { UserRoutes } from '../modules/User/User.routes';
const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/admins/auth',
    route: AdminAuthRoutes,
  },
  {
    path: '/users/auth',
    route: UserAuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/coupons',
    route: CouponRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
