import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import validateRequest from '../../middlewares/validateRequest';
import AuthControllers from './auth.controller';
import AuthValidations from './auth.validation';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidations.LoginValidation),
  AuthControllers.login,
);

router.post(
  '/change-password',
  AuthGuard(),
  validateRequest(AuthValidations.ChangePasswordValidation),
  AuthControllers.changePassword,
);

const AuthRoutes = router;

export default AuthRoutes;
