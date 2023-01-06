#!/usr/bin/env node

'use strict';

// Modules
import { configBoilerPlate, parserConfigFile } from './modules/index.js';

// Config
import config from './config/index.js';

const main = async ([, , ...args] = process.argv) => {
  if (!args.length) {
    await configBoilerPlate(config.boilerplate.config);
    console.log('Here\'s your boilerplate config:', config.boilerplate.config);
  }
  if (args.length === 1 && /^config/.test(args[0])) {
    console.log('Parsing started...');
    const boilerplateConfig = await parserConfigFile();
    console.log('Here\'s your boilerplate config:', boilerplateConfig);
  }
};

main();