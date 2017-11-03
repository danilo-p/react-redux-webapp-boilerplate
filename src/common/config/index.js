import config from './config.yml';

let localConfig;

try {
  localConfig = require('./config.local.yml'); // eslint-disable-line global-require
} catch (error) {
  localConfig = {};
}

const finalConfig = Object.freeze(Object.assign(
  {},
  config,
  localConfig,
));

export default finalConfig;
