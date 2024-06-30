import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    frontEndTech: z.string({
      required_error: 'Frontend technology is required',
    }),
    backEndTech: z.string({
      required_error: 'Backend technology is required',
    }),
    frontEndRepo: z.string().optional(),
    backEndRepo: z.string().optional(),
    liveLink: z.string({
      required_error: 'Live link is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
    duration: z.string({
      required_error: 'Duration is required',
    }),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    frontEndTech: z.string().optional(),
    backEndTech: z.string().optional(),
    frontEndRepo: z.string().optional(),
    backEndRepo: z.string().optional(),
    liveLink: z.string().optional(),
    image: z.string().optional(),
    duration: z.string().optional(),
  }),
});

const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};

export default ProjectValidations;
