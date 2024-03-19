import dotenv from 'dotenv';
import { cleanEnv, num } from 'envalid';

dotenv.config({ path: './.env' });

const env = cleanEnv(process.env, {
  PORT: num()
});

export default env;
