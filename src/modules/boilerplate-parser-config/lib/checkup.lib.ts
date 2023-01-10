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
  BOILERPLATE_NO_LANGUAGE,
  BOILERPLATE_INVALID_LANGUAGE,
  BOILERPLATE_INVALID_FRAMEWORK,
  BOILERPLATE_TYPESCRIPT_BOOLEAN,
  BOILERPLATE_TYPESCRIPT_NOT_COMPATIBLE,
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
    if (!environments.includes(boilerplateConfig.environment.toLowerCase())) {
      console.log(BOILERPLATE_INVALID_ENVIRONMENT);
      process.exit(1);
    }
  },

  boilerplateFrontend: (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
    const jsFrameworks = config.frontendJsFrameworks;
    const pyFrameworks = config.frontendPythonFrameworks;
    const languages = config.languages;

    const language = boilerplateConfig.language;
    const framework = boilerplateConfig.framework;
    const typescript = boilerplateConfig.typescript;

    if (!language) {
      console.log(BOILERPLATE_NO_LANGUAGE);
      process.exit(1);
    }

    if (!languages.includes(language.toLowerCase())) {
      console.log(BOILERPLATE_INVALID_LANGUAGE, languages.join(', '));
      process.exit(1);
    }

    if (language === 'javascript') {
      if (framework) {
        if (!jsFrameworks.includes(framework.toLowerCase())) {
          console.log(BOILERPLATE_INVALID_FRAMEWORK, jsFrameworks.join(', '));
          process.exit(1);
        }
      } else {
        boilerplateConfig.framework = 'vanilla';
      }
    }

    if (language === 'python') {
      if (framework) {
        if (!pyFrameworks.includes(framework.toLowerCase())) {
          console.log(BOILERPLATE_INVALID_FRAMEWORK, pyFrameworks.join(', '));
          process.exit(1);
        }
      }
    }

    if (typeof typescript === 'boolean') {

      if (language !== 'javascript') {
        console.log(BOILERPLATE_TYPESCRIPT_NOT_COMPATIBLE);
        process.exit(1);
      }
      if (typeof typescript !== 'boolean') {
        console.log(BOILERPLATE_TYPESCRIPT_BOOLEAN);
        process.exit(1);
      }
    }
  },

  boilerplateBackend: (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
    const jsFrameworks = config.backendJsFrameworks;
    const pyFrameworks = config.backendPythonFrameworks;
    const languages = config.languages;
    const language = boilerplateConfig.language;
    const framework = boilerplateConfig.framework;
    const typescript = boilerplateConfig.typescript;
  
    if (!language) {
      console.log(BOILERPLATE_NO_LANGUAGE);
      process.exit(1);
    }

    if (!languages.includes(language.toLowerCase())) {
      console.log(BOILERPLATE_INVALID_LANGUAGE, languages.join(', '));
      process.exit(1);
    }
  
    if (framework) {
      if (language === 'javascript') {
        if (!jsFrameworks.includes(framework.toLowerCase())) {
          console.log(BOILERPLATE_INVALID_FRAMEWORK, jsFrameworks.join(', '));
          process.exit(1);
        }
      } else {
        boilerplateConfig.framework = 'vanilla';
      }

      if (language === 'python') {
        if (!pyFrameworks.includes(framework.toLowerCase())) {
          console.log(BOILERPLATE_INVALID_FRAMEWORK, pyFrameworks.join(', '));
          process.exit(1);
        }
      }
    }
  
    if (typeof typescript === 'boolean') {
      if (language !== 'javascript') {
        console.log(BOILERPLATE_TYPESCRIPT_NOT_COMPATIBLE);
        process.exit(1);
      }
      if (typeof typescript !== 'boolean') {
        console.log(BOILERPLATE_TYPESCRIPT_BOOLEAN);
        process.exit(1);
      }
    }
  },

};

export default checkup;