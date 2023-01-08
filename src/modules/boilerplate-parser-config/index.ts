'use strict';

'use strict';

// Core Module
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Types
import { IBoilerPlateConfig } from './types/index.js';

const rootPath = process.cwd();
const pathToConfigFile = join(rootPath, 'boilerplate.config.json');

const boilerplateParserConfig = async () => {
  if (!existsSync(pathToConfigFile)) {
    console.log('Error: provide config file: "boilerplate.config.json"');
    return;
  }
  const getConfigFile = await readFile(pathToConfigFile);
  const configFileAsString = getConfigFile.toString();
  if (!configFileAsString.toString().length) {
    console.log('Error: configure your config file');
    return;
  }
  const configFileParse = JSON.parse(configFileAsString) as IBoilerPlateConfig;
  if (!configFileParse.environment) {
    console.log('Error: provide an environment');
    return;
  }
  // Edit logic...
  
  return configFileParse;
};

export default boilerplateParserConfig;