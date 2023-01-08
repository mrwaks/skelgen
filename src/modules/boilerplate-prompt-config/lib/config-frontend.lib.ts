'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../config.js';

// Types
import { IBoilerPlateConfig } from '../types/index.js';

const promptFramework = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'What do you want to work your frontend with ?',
    choices: config.frontendFrameworks,
  },
];

const configFrontendFramework = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const response = await prompt(promptFramework);
  boilerplateConfig.framework = response.choice;
};

const configFrontend = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  await configFrontendFramework(boilerplateConfig);
};

export default configFrontend;