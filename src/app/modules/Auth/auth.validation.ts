import { z } from 'zod';

const LoginValidation = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email!' }),
    password: z.string(),
  }),
});

const ChangePasswordValidation = z.object({
  body: z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
  }),
});

const AuthValidations = {
  LoginValidation,
  ChangePasswordValidation,
};

export default AuthValidations;
