'use strict';

// Modules
import {
  configEnvironment,
  dispatchingEnvironment,
  configTypescript,
} from './index.js';

// Types
import { IBoilerPlateConfig } from 'src/types';


const configBoilerPlate = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  await configEnvironment(boilerplateConfig);
  await dispatchingEnvironment(boilerplateConfig);
  await configTypescript(boilerplateConfig);
};

export default configBoilerPlate;