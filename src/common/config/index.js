import config from "./config.yml";

let local_config;

try {
  local_config = require("./config.local.yml");
} catch(error) {
  local_config = {};
}

const final_config = Object.freeze(
  Object.assign(
    {},
    config,
    local_config
  )
);

export default final_config;
