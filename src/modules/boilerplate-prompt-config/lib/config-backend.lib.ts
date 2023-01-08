'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../../config.common.js';

// Types
import { IBoilerPlateConfig } from '../../types.common.js';

const promptLanguage = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'Which language do you want to work with ?',
    choices: config.languages,
  },
];

const promptFramework = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'Which framework do you want to work with ?',
    choices: config.backendFrameworks,
  },
];

const configBackendLanguage = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const response = await prompt(promptLanguage);
  boilerplateConfig.language = response.choice;
};

const configBackendFramework = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  let response;
  switch (boilerplateConfig.language) {
    case 'nodejs':
      response = await prompt(promptFramework);
      boilerplateConfig.framework = response.choice;
      break;
    case 'python':
      // Edit logic here...
      break;
  }
};

const configBackend = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  await configBackendLanguage(boilerplateConfig);
  await configBackendFramework(boilerplateConfig);
};

export default configBackend;