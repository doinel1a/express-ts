import express from 'express';

const PORT = 9876;

const server = express();

server.listen(PORT, () => {
	console.log(`SERVER LISTENING ON: http://localhost:${PORT}`);
});
