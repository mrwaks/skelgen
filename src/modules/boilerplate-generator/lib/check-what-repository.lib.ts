'use strict';

// Core Modules
import { join } from 'path';

// Types
import { IMetadataRepository, TRepositories } from '../types/index.js';

const rootPath = process.cwd();

const checkWhatRepository = async (repositoryNameToCompare: string, repositories: TRepositories) => {
  const entries = Object.entries(repositories);
  let metadataRepository: IMetadataRepository = {};
  for (let entry of entries) {
    const repositoryName = entry[0];
    const repository = entry[1];
  
    if (repositoryName === repositoryNameToCompare) {
      const pathToSaveBoilerplate = join(rootPath, `boilerplate-${repositoryName}`);
      metadataRepository = {
        repository,
        pathToSaveBoilerplate,
      };
    }
  }
  return metadataRepository;
};

export default checkWhatRepository;