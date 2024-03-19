import env from './lib/env';
import express from 'express';
import log from './lib/logger';

const PORT = env.PORT || 9876;

const server = express();

server.listen(PORT, () => {
	log.info(`SERVER LISTENING ON: http://localhost:${PORT}`);
});
