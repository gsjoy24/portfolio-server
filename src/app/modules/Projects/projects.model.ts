import { Schema, model } from 'mongoose';
import { TProject } from './projects.type';

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  frontEndTech: { type: String },
  backEndTech: { type: String },
  frontEndRepo: { type: String },
  backEndRepo: { type: String },
  liveLink: { type: String },
  image: { type: String },
  duration: { type: String },
});

const Project = model('Project', projectSchema);

export default Project;
