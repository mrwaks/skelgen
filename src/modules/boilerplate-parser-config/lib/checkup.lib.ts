'use strict';

// Core Module
import { existsSync } from 'fs';

// Config
import config from '../../config.common.js';

// Types
import { IBoilerPlateConfig } from '../../types.common.js';

// Constants
import constants from '../constants.js';
const {
  BOILERPLATE_NOT_EXITS,
  BOILERPLATE_EMPTY,
  BOILERPLATE_NO_ENVIRONMENT,
  BOILERPLATE_INVALID_ENVIRONMENT,
  BOILERPLATE_LANGUAGE_NOT_REQUIRED_WITH_FRONTEND_ENVIRONMENT,
  BOILERPLATE_NO_LANGUAGE,
  BOILERPLATE_INVALID_LANGUAGE,
  BOILERPLATE_INVALID_FRAMEWORK,
  BOILERPLATE_TYPESCRIPT_BOOLEAN,
} = constants.ERROR;

const checkup = {
  boilerplateExistence: (pathToBoilerplateConfigFile: string) => {
    if (!existsSync(pathToBoilerplateConfigFile)) {
      console.log(BOILERPLATE_NOT_EXITS);
      process.exit(1);
    }
  },

  boilerplateEmpty: (boilerplateConfigAsString: string) => {
    if (!boilerplateConfigAsString.length) {
      console.log(BOILERPLATE_EMPTY);
      process.exit(1);
    }
  },

  boilerplateEnvironment: (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
    const environments = config.environments;
  
    if (!boilerplateConfig.environment) {
      console.log(BOILERPLATE_NO_ENVIRONMENT);
      process.exit(1);
    }
    if (!environments.includes(boilerplateConfig.environment)) {
      console.log(BOILERPLATE_INVALID_ENVIRONMENT);
      process.exit(1);
    }
  },

  boilerplateFrontend: (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
    const frontendFrameworks = config.frontendFrameworks;
    const language = boilerplateConfig.language;
    const framework = boilerplateConfig.framework;
    const typescript = boilerplateConfig.typescript;
  
    if (language) {
      console.log(BOILERPLATE_LANGUAGE_NOT_REQUIRED_WITH_FRONTEND_ENVIRONMENT);
      process.exit(1);
    }
  
    if (framework) {
      if (!frontendFrameworks.includes(framework)) {
        console.log(BOILERPLATE_INVALID_FRAMEWORK, frontendFrameworks.join(', '));
        process.exit(1);
      }
    } else {
      boilerplateConfig.framework = 'vanilla';
    }
  
    if (typescript) {
      if (typeof typescript !== 'boolean') {
        console.log(BOILERPLATE_TYPESCRIPT_BOOLEAN);
        process.exit(1);
      }
    } else {
      boilerplateConfig.typescript = false;
    }
  },

  boilerplateBackend: (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
    const backendFrameworks = config.backendFrameworks;
    const languages = config.languages;
    const language = boilerplateConfig.language;
    const framework = boilerplateConfig.framework;
    const typescript = boilerplateConfig.typescript;
  
    if (!language) {
      console.log(BOILERPLATE_NO_LANGUAGE);
      process.exit(1);
    }

    if (!languages.includes(language)) {
      console.log(BOILERPLATE_INVALID_LANGUAGE, languages.join(', '));
      process.exit(1);
    }
  
    if (framework) {
      if (!backendFrameworks.includes(framework)) {
        console.log(BOILERPLATE_INVALID_FRAMEWORK, backendFrameworks.join(', '));
        process.exit(1);
      }
    } else {
      boilerplateConfig.framework = 'vanilla';
    }
  
    if (typescript) {
      if (typeof typescript !== 'boolean') {
        console.log(BOILERPLATE_TYPESCRIPT_BOOLEAN);
        process.exit(1);
      }
    } else {
      boilerplateConfig.typescript = false;
    }
  },

};

export default checkup;