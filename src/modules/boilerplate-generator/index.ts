'use strict';

// Lib
import {
  generateNameByBoilerplateConfig,
  checkWhatRepository,
  gitCloneAndRemoveDotGitFile,
} from './lib/index.js';

// Config
import config from './config/index.js';

// Types
import { IBoilerPlateConfig } from '../types.common.js';

const boilerplateGenerator = async (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  const nameGenerateByBoilerplateConfig = generateNameByBoilerplateConfig(boilerplateConfig);
  const { repository, pathToSaveBoilerplate } = await checkWhatRepository(nameGenerateByBoilerplateConfig, config.github.repositories);
  if (repository && pathToSaveBoilerplate) {
    await gitCloneAndRemoveDotGitFile(repository, pathToSaveBoilerplate);
  }
};

export default boilerplateGenerator;