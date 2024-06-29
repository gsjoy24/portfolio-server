import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  introduction: { type: String, required: true },
  profilePicture: { type: String },
  frontEndSkills: [{ type: String }],
  backEndSkills: [{ type: String }],
  tools: [{ type: String }],
  socialLinks: {
    linkedin: { type: String },
    github: { type: String },
    x: { type: String },
    facebook: { type: String },
  },
  contact: {
    phone: { type: String },
    email: { type: String },
  },
  resume: { type: String },
});

const Profile = model('Profile', userSchema);

export default Profile;
