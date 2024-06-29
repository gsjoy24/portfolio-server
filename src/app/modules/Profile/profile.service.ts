import Profile from './profile.model';
import { TProfile } from './profile.type';

const updateProfile = async (id: string, profile: TProfile) => {
  return await Profile.findByIdAndUpdate(id, profile, { new: true });
};

const getProfile = async () => {
  return await Profile.findOne();
};

const ProfileServices = {
  updateProfile,
  getProfile,
};

export default ProfileServices;
