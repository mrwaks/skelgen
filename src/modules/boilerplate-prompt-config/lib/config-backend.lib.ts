'use strict';

// Setup
import { prompt } from '../setup/index.js';

// Config
import config from '../../config.common.js';

// Types
import { IBoilerPlateConfig } from '../../types.common.js';

const promptLanguage = [
  {
    prefix: 'skelgen -',
    type: 'list',
    name: 'choice',
    message: 'Which language do you want to work with ?',
    choices: config.languages,
  },
];

const setPromptFramework = (language: string) => {
  const jsFrameworks = config.backendJsFrameworks;
  const pyFrameworks = config.backendPythonFrameworks;

  const promptFramework = {
    prefix: 'skelgen -',
    type: 'list',
    name: 'choice',
    message: 'Which framework do you want to work with ?',
    choices: language === 'javascript' ? jsFrameworks : language === 'python' ? pyFrameworks : 'javascript',
  };

  return promptFramework;
};

const configLanguage = async () => {
  const response = await prompt(promptLanguage);
  return response.choice;
};

const configBackendFramework = async (language: string) => {
  const promptFramework = setPromptFramework(language);
  const response = await prompt([promptFramework]);
  return response.choice;
};

const configBackend = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const language = await configLanguage();
  const framework = await configBackendFramework(language);

  boilerplateConfig.language = language;
  boilerplateConfig.framework = framework;
};

export default configBackend;