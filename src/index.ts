#!/usr/bin/env node

'use strict';

// Modules
import { 
  boilerplatePromptConfig, 
  boilerplateParserConfig,
} from './modules/index.js';

const main = async ([, , ...args] = process.argv) => {
  if (!args.length) {
    let boilerplateConfig = {};
    await boilerplatePromptConfig(boilerplateConfig);
    console.log('Here\'s your boilerplate config:', boilerplateConfig);
  }
  if (args.length === 1 && /^config/.test(args[0])) {
    console.log('Parsing started...');
    const boilerplateConfig = await boilerplateParserConfig();
    console.log('Here\'s your boilerplate config:', boilerplateConfig);
  }
};

main();