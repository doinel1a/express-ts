import express from 'express';

import environmentVariables from './lib/environment-variables';
import log from './lib/logger';

const { PORT } = environmentVariables;

const server = express();

server.listen(PORT || 9876, () => {
  log.info(`SERVER LISTENING ON: http://localhost:${PORT}`);
});
