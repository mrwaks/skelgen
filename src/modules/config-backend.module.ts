'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../config/index.js';

// Types
import { IBoilerPlateConfig } from '../types/index.js';

const promptLanguage = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'Which language do you want to work with ?',
    choices: config.boilerplate.languages,
  },
];

const promptFramework = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'Which framework do you want to work with ?',
    choices: config.boilerplate.backendFrameworks,
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

const configBackend = async () => {
  await configBackendLanguage(config.boilerplate.config);
  await configBackendFramework(config.boilerplate.config);
};

export default configBackend;