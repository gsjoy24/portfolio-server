import { Schema, model } from 'mongoose';
import userData from './profile.constant';

const userSchema = new Schema({
  name: { type: String, required: true, default: userData.name },
  designation: { type: String, required: true, default: userData.designation },
  introduction: {
    type: String,
    required: true,
    default: userData.introduction,
  },
  profilePicture: { type: String, default: userData.profilePicture },
  frontEndSkills: { type: String, default: userData.frontEndSkills },
  backEndSkills: { type: String, default: userData.backEndSkills },
  tools: { type: String, default: userData.tools },
  socialLinks: {
    linkedin: { type: String, default: userData.socialLinks.linkedin },
    github: { type: String, default: userData.socialLinks.github },
    x: { type: String, default: userData.socialLinks.x },
    facebook: { type: String, default: userData.socialLinks.facebook },
    youtube: { type: String, default: userData.socialLinks.youtube },
  },
  contact: {
    phone: { type: String, default: userData.contact.phone },
    email: { type: String, default: userData.contact.email },
  },
  resumeLink: { type: String, default: userData.resumeLink },
});

const Profile = model('Profile', userSchema);

export default Profile;
