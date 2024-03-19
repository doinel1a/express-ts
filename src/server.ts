import env from './lib/env';
import express from 'express';

const PORT = env.PORT || 9876;

const server = express();

server.listen(PORT, () => {
	console.log(`SERVER LISTENING ON: http://localhost:${PORT}`);
});
