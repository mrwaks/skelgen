'use strict';

// Core Module
import { readFile } from 'fs/promises';
import { join } from 'path';

// Lib
import { checkup } from './lib/index.js';

// Types
import { IBoilerPlateConfig } from '../types.common.js';

const rootPath = process.cwd();
const pathToBoilerplateConfigFile = join(rootPath, 'boilerplate.config.json');

const boilerplateParserConfig = async () => {
  checkup.boilerplateExistence(pathToBoilerplateConfigFile);

  const boilerplateConfigAsString = (await readFile(pathToBoilerplateConfigFile)).toString();

  checkup.boilerplateEmpty(boilerplateConfigAsString);

  const boilerplateConfig = JSON.parse(boilerplateConfigAsString) as IBoilerPlateConfig;

  checkup.boilerplateEnvironment(boilerplateConfig);

  if (boilerplateConfig.environment.toLowerCase() === 'frontend') {
    checkup.boilerplateFrontend(boilerplateConfig);
  }
  if (boilerplateConfig.environment.toLowerCase() === 'backend') {
    checkup.boilerplateBackend(boilerplateConfig);
  }
  
  return boilerplateConfig;
};

export default boilerplateParserConfig;