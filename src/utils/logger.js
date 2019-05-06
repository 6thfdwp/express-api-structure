const path = require('path');
const fs = require('fs');
const jsonStringify = require('fast-safe-stringify');

const { createLogger, format, transports } = require('winston');
const { combine, colorize, timestamp, label, printf, simple } = format;

const filedir = path.resolve(process.cwd(), 'logs');
const filepath = path.resolve(filedir);
if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);

const infoFormatter = printf(info => {
  const { timestamp, level, message, ...meta } = info;

  // console.log(meta);
  return `[${timestamp}] ${level}: ${message} ${jsonStringify(meta)}`;
});

const logger = createLogger({
  // NEED configurable from LOG_LEVEL
  level: 'info',
  format: combine(timestamp(), infoFormatter),
  transports: [
    // new transports.Console({ colorized: true, format: winston.format.simple() }),
    new transports.File({
      filename: path.resolve(filedir, 'info.log'),
      colorize: true
    }),
    new transports.File({
      colorize: true,
      level: 'error',
      filename: path.resolve(filedir, 'error.log')
    })
  ],

  exitOnError: false // do not exit on handled exceptions
});

module.exports = {
  // log incoming request
  info: ({ requestid, sourceid, udid, path }) => {
    const message = `requesting ${path}`;
    logger.info(message, { requestid, sourceid, udid });
  },

  error: (err, path, meta) => {
    const { code, message } = err;
    meta.status_code = code;
    logger.error(`${path} ${message.title}`, meta);
  }
};
