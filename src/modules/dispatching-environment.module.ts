'use strict';

// Modules
import {
  configFrontend,
  configBackend,
} from './index.js';

// Types
import { IBoilerPlateConfig } from '../types/index.js';

const dispatchingEnvironment = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  switch (boilerplateConfig.environment) {
    case 'frontend':
      await configFrontend();
      break;
    case 'backend':
      await configBackend();
      break;
  }
};

export default dispatchingEnvironment;