'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../../config.common.js';

// Types
import { IBoilerPlateConfig } from '../../types.common.js';

const frameworks = [
  ...config.frontendJsFrameworks,
  ...config.backendJsFrameworks,
];

const promptTypescript = [
  {
    prefix: 'skelgen -',
    type: 'list',
    name: 'choice',
    message: 'Do you want to use typescript ?',
    choices: ['yes', 'no'],
  },
];

const configTypescript = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const environment = boilerplateConfig.environment;
  const framework = boilerplateConfig.framework;

  if (environment === 'frontend' || environment === 'backend') {
    for (let frame of frameworks) {
      if (frame === framework) {
        const response = await prompt(promptTypescript);
        boilerplateConfig.typescript = response.choice === 'yes';
        break;
      }
    }
  }

};

export default configTypescript;