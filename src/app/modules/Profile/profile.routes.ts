import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import validateRequest from '../../middlewares/validateRequest';
import ProfileControllers from './profile.controller';
import updateProfileValidation from './profile.validation';

const router = express.Router();

router.get('/', ProfileControllers.getProfile);
router.put(
  '/:id',
  AuthGuard(),
  validateRequest(updateProfileValidation),
  ProfileControllers.updateProfile,
);

const ProfileRoutes = router;

export default ProfileRoutes;
