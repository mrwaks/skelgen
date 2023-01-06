'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../config/index.js';

// Types
import { IBoilerPlateConfig } from 'src/types';

const promptFramework = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'What do you want to work your frontend with ?',
    choices: config.boilerplate.frontendFrameworks,
  },
];

const configFrontendFramework = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const response = await prompt(promptFramework);
  boilerplateConfig.framework = response.choice;
};

const configFrontend = async () => {
  await configFrontendFramework(config.boilerplate.config);
};

export default configFrontend;