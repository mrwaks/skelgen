'use strict';

// Lib
import configFrontend from './config-frontend.lib.js';
import configBackend from './config-backend.lib.js';

// Types
import { IBoilerPlateConfig } from '../types/index.js';

const dispatchingEnvironment = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  switch (boilerplateConfig.environment) {
    case 'frontend':
      await configFrontend(boilerplateConfig);
      break;
    case 'backend':
      await configBackend(boilerplateConfig);
      break;
  }
};

export default dispatchingEnvironment;