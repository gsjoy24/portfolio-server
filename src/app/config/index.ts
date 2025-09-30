import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  user_email: process.env.USER_EMAIL as string,
  user_password: process.env.USER_PASSWORD as string,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
  jwt_access_secret: process.env.JWT_ACCESS_TOKEN,
  jwt_access_expiration: process.env.JWT_ACCESS_EXPIRES_IN
};
