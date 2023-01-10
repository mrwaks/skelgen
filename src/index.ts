#!/usr/bin/env node

'use strict';

// Modules
import { 
  boilerplatePromptConfig, 
  boilerplateParserConfig,
  boilerplateGenerator,
} from './modules/index.js';

const main = async ([, , ...args] = process.argv) => {
  if (!args.length) {
    let boilerplateConfig = {};
    await boilerplatePromptConfig(boilerplateConfig);
    await boilerplateGenerator(boilerplateConfig);
    console.log('Your boilerplate has been successfully generated !');
  }
  if (args.length === 1 && /^config$/.test(args[0])) {
    const boilerplateConfig = await boilerplateParserConfig();
    await boilerplateGenerator(boilerplateConfig);
    console.log('Your boilerplate has been successfully generated !');
  }
};

main();