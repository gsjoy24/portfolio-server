import { z } from 'zod';

const updateProfileValidation = z.object({
  name: z.string().optional(),
  designation: z.string().optional(),
  introduction: z.string().optional(),
  profilePicture: z
    .string()
    .url({
      message: 'Invalid URL!',
    })
    .optional(),
  frontEndSkills: z.string().optional(),
  backEndSkills: z.string().optional(),
  tools: z.string().optional(),
  socialLinks: z
    .object({
      linkedin: z
        .string()
        .url({
          message: 'Invalid URL!',
        })
        .optional(),
      github: z
        .string()
        .url({
          message: 'Invalid URL!',
        })
        .optional(),
      x: z
        .string()
        .url({
          message: 'Invalid URL!',
        })
        .optional(),
      facebook: z
        .string()
        .url({
          message: 'Invalid URL!',
        })
        .optional(),
      youtube: z
        .string()
        .url({
          message: 'Invalid URL!',
        })
        .optional(),
    })
    .optional(),
  contact: z
    .object({
      phone: z.string().optional(),
      email: z
        .string()
        .email({
          message: 'Invalid email!',
        })
        .optional(),
    })
    .optional(),
  resumeLink: z
    .string()
    .url({
      message: 'Invalid URL!',
    })
    .optional(),
});

export default updateProfileValidation;
