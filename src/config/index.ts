'use strict';

// Core Modules
import { promisify } from 'util';

// Npm Modules
import figletPkg from 'figlet';

// Utils
import { color } from '../utils/index.js';

// Config
import helper from './helper.config.js';

const figlet = promisify(figletPkg);

const config = {
  version: '0.0.1',
  banner: async function () {
    const banner =  color(`${await figlet('skelgen')}V-${this.version}`, 'green');
    return banner;
  },
  helper: helper,
};

export default config;