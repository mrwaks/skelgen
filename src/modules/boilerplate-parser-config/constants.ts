'use strict';

// Utils
import { color } from '../../utils/index.js';

// Config
import config from '../config.common.js';

const constants = {
  ERROR: {
    BOILERPLATE_NOT_EXITS: color('Error: please provide a config file \'boilerplate.config.json\'', 'red'),
    BOILERPLATE_EMPTY: color('Error: the configuration file is empty', 'red'),
    BOILERPLATE_NO_ENVIRONMENT: color(`Error: configure an environment: [${config.environments.join(', ')}]`, 'red'),
    BOILERPLATE_INVALID_ENVIRONMENT: color(`Error: invalid environment\nValid environments: [${config.environments.join(', ')}]`, 'red'),
    BOILERPLATE_LANGUAGE_NOT_REQUIRED_WITH_FRONTEND_ENVIRONMENT: color('Error: the \'language\' property is not necessary with the \'frontend\' environment', 'red'),
    BOILERPLATE_NO_LANGUAGE: color('Error: configure a language', 'red'),
    BOILERPLATE_INVALID_LANGUAGE: color('Error: invalid language: (valid languages: %s)', 'red'),
    BOILERPLATE_INVALID_FRAMEWORK: color('Error: invalid framework: (valid frameworks: %s)', 'red'),
    BOILERPLATE_TYPESCRIPT_BOOLEAN: color('Error: typescript value must be of type boolean', 'red'),
    BOILERPLATE_TYPESCRIPT_NOT_COMPATIBLE: color('Error: typescript is not compatible with this language', 'red'),
  },
};

export default constants;