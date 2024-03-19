import { cleanEnv, num } from 'envalid';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const env = cleanEnv(process.env, {
	PORT: num(),
});

export default env;
