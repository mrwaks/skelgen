'use strict';

// Lib
import {
  configEnvironment,
  dispatchingEnvironment,
  configTypescript,
} from './lib/index.js';

// Types
import { IBoilerPlateConfig } from './types/index.js';


const boilerplatePromptConfig = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  await configEnvironment(boilerplateConfig);
  await dispatchingEnvironment(boilerplateConfig);
  await configTypescript(boilerplateConfig);
  return boilerplateConfig;
};

export default boilerplatePromptConfig;