import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import Project from './projects.model';
import { TProject } from './projects.type';

const createProject = async (project: TProject) => {
  const newProject = await Project.create(project);
  return newProject;
};

const getProjects = async () => {
  const projects = await Project.find();
  return projects;
};

const getProject = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found!');
  }
  return project;
};

const updateProject = async (id: string, project: TProject) => {
  await getProject(id);
  const updatedProject = await Project.findByIdAndUpdate(id, project, {
    new: true,
  });
  return updatedProject;
};

const deleteProject = async (id: string) => {
  await getProject(id);
  await Project.findByIdAndDelete(id);
  return { message: 'Project deleted successfully!' };
};

const ProjectsServices = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
};

export default ProjectsServices;
