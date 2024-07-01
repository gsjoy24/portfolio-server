import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
  }),
});

export default createBlogValidation;
