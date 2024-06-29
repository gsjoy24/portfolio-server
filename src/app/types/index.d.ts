import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      adminData?: JwtPayload;
      userData?: JwtPayload;
    }
  }
}
