import dotenv from 'dotenv';
import { cleanEnv, port, str } from 'envalid';

dotenv.config();

export const config = cleanEnv(process.env, {
  PORT: port(),

  SUMSUB_BASE_URL: str(),
  SUMSUB_APP_TOKEN: str(),
  SUMSUB_SECRET_KEY: str(),
});
