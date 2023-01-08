'use strict';

// Config
import config from '../config.common.js';

const constants = {
  ERROR: {
    BOILERPLATE_NOT_EXITS: 'Error: please provide a config file \'boilerplate.config.json\'',
    BOILERPLATE_EMPTY: 'Error: the configuration file is empty',
    BOILERPLATE_NO_ENVIRONMENT: `Error: configure an environment: [${config.environments.join(', ')}]`,
    BOILERPLATE_INVALID_ENVIRONMENT: `Error: invalid environment\nValid environments: [${config.environments.join(', ')}]`,
    BOILERPLATE_LANGUAGE_NOT_REQUIRED_WITH_FRONTEND_ENVIRONMENT: 'Error: the \'language\' property is not necessary with the \'frontend\' environment',
    BOILERPLATE_NO_LANGUAGE: 'Error: configure a language',
    BOILERPLATE_INVALID_LANGUAGE: 'Error: invalid language: (valid languages: %s)',
    BOILERPLATE_INVALID_FRAMEWORK: 'Error: invalid framework: (valid frameworks: %s)',
    BOILERPLATE_TYPESCRIPT_BOOLEAN: 'Error: typescript value must be of type boolean',
  },
};

export default constants;