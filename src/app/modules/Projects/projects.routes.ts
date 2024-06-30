import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import validateRequest from '../../middlewares/validateRequest';
import ProjectValidations from './project.validation';
import projectsController from './projects.controllers';

const router = express.Router();

router.post(
  '/',
  AuthGuard(),
  validateRequest(ProjectValidations.createProjectValidation),
  projectsController.createProject,
);
router.get('/', projectsController.getProjects);
router.get('/:id', projectsController.getProject);
router.put(
  '/:id',
  AuthGuard(),
  validateRequest(ProjectValidations.updateProjectValidation),
  projectsController.updateProject,
);
router.delete('/:id', AuthGuard(), projectsController.deleteProject);

const projectsRoutes = router;

export default projectsRoutes;
