'use strict';

// Setup
import { prompt } from '../setup/index.js';

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
  const jsFrameworks = config.frontendJsFrameworks;
  const pyFrameworks = config.frontendPythonFrameworks;

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

const configFrontendFramework = async (language: string) => {
  const promptFramework = setPromptFramework(language);
  const response = await prompt([promptFramework]);
  return response.choice;
};

const configFrontend = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const language = await configLanguage();
  const framework = await configFrontendFramework(language);

  boilerplateConfig.language = language;
  boilerplateConfig.framework = framework;
};

export default configFrontend;