'use strict';

// Core Modules
import { join } from 'path';
import { rm } from 'fs/promises';

// Modules
import clone from '../../git-clone/index.js';

const gitCloneAndRemoveDotGitFile = async (repository: string, pathToSaveBoilerplate: string) => {
  await clone(repository, pathToSaveBoilerplate);
  await rm(join(pathToSaveBoilerplate, '.git'), {
    recursive: true,
    force: true,
  });
};

export default gitCloneAndRemoveDotGitFile;