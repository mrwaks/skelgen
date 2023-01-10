'use strict';

const helper = [
  'Helper:',
  '  commands:',
  '    - skelgen -> to generate a boilerplate from questions via a prompt cli',
  '  arguments:',
  '     argument: config',
  '     description: to generate a boilerplate via a boilerplate.config.json',
  '     alias: [-c | --config]',
  '     example: skelgen config',
  '   argument: version',
  '     description: to display the version of skelgen',
  '     alias: [-v | --version]',
  '     example: skelgen version',
].join('\n');

export default helper;