'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../config.js';

// Types
import { IBoilerPlateConfig } from '../types/index.js';

const environments = config.environments;

const promptEnvironment = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'What kind of environment do you want ?',
    choices: environments,
  },
];

const configEnvironment = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const response = await prompt(promptEnvironment);
  boilerplateConfig.environment = response.choice;
};

export default configEnvironment;