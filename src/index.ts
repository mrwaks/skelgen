#!/usr/bin/env node

'use strict';

// Modules
import { 
  boilerplatePromptConfig, 
  boilerplateParserConfig,
  boilerplateGenerator,
} from './modules/index.js';

// Utils
import { color } from './utils/index.js';

// Config
import config from './config/index.js';

const main = async ([, , ...args] = process.argv) => {
  if (!args.length) {
    let boilerplateConfig = {};
    await boilerplatePromptConfig(boilerplateConfig);
    await boilerplateGenerator(boilerplateConfig);
    console.log(color('Your boilerplate has been successfully generated !', 'green'));
  }
  if (args.length === 1) {
    const argument = args[0];

    if (/^config$|^-c$|^--config$/.test(argument)) {
      const boilerplateConfig = await boilerplateParserConfig();
      await boilerplateGenerator(boilerplateConfig);
      console.log(color('Your boilerplate has been successfully generated !', 'green'));
    }

    if (/^version$|^-v$|^--version$/.test(argument)) {
      const banner = await config.banner();
      console.log(banner);
    }

    if (/^help$|^-h$|^--helper$/.test(argument)) {
      console.log(config.helper);
    }

  } else {
    console.log(config.helper);
  }
};

main();