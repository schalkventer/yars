/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const timekeeper = require('timekeeper');

global.console = {
  /* eslint-disable no-console */
  log: console.log,
  error: console.error,
  warn: jest.fn(),
  info: console.info,
  debug: console.debug,
  /* eslint-enable no-console */
};

process.env.TZ = 'UTC';
timekeeper.freeze('10 April 2010 11:00');
