/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('dotenv');
/* eslint-enable @typescript-eslint/no-var-requires */

global.process.env = {
  ...global.process.env,
  ...config().parsed,
};
