import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import ProjectsServices from './projects.services';

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsServices.createProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully!',
    data: result,
  });
});

const getProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsServices.getProject(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project fetched successfully!',
    data: result,
  });
});

const getProjects = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectsServices.getProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects fetched successfully!',
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsServices.updateProject(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully!',
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsServices.deleteProject(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully!',
    data: result,
  });
});

const ProjectsControllers = {
  createProject,
  getProject,
  getProjects,
  updateProject,
  deleteProject,
};

export default ProjectsControllers;
