import dotenv from 'dotenv';
import { cleanEnv, num } from 'envalid';

dotenv.config({ path: './.env' });

const environmentVariables = cleanEnv(process.env, {
  PORT: num()
});

export default environmentVariables;
