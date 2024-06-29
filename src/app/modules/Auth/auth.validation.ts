import { z } from 'zod';

const LoginValidation = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email!' }),
    password: z.string(),
  }),
});

const AuthValidations = {
  LoginValidation,
};

export default AuthValidations;
