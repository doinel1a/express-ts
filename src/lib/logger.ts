import dayjs from 'dayjs';
import pino from 'pino';

const log = pino({
  base: {
    pid: false
  },
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
});

export default log;
