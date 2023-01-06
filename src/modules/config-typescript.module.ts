'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../config/index.js';

// Types
import { IBoilerPlateConfig } from '../types/index.js';

const frontendFrameworks = config.boilerplate.frontendFrameworks;
const backendFrameworks = config.boilerplate.backendFrameworks;

const promptTypescript = [
  {
    prefix: 'boiler-gen -',
    type: 'list',
    name: 'choice',
    message: 'Do you want to use typescript ?',
    choices: ['yes', 'no'],
  },
];

const configTypescript = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const environment = boilerplateConfig.environment;
  const framework = boilerplateConfig.framework;

  if (environment === 'frontend') {
    for (let frame of frontendFrameworks) {
      if (framework === frame) {
        const response = await prompt(promptTypescript);
        boilerplateConfig.typescript = response.choice;
        break;
      }
    }
  }

  if (environment === 'backend') {
    for (let frame of backendFrameworks) {
      if (framework === frame) {
        const response = await prompt(promptTypescript);
        boilerplateConfig.typescript = response.choice;
        break;
      }
    }
  }
};

export default configTypescript;