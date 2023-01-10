'use strict';

// Types
import { TColors } from '../types/index.js';

const red = '\x1b[31m';
const yellow = '\x1b[33m';
const green = '\x1b[32m';
const close = '\x1b[0m';

// eslint-disable-next-line @typescript-eslint/no-shadow
const color = (coloringText: string, color: TColors) => {
  let result: string;
  switch (color) {
    case 'green':
      result = [green, coloringText, close].join('');
      break;
    case 'yellow':
      result = [yellow, coloringText, close].join('');
      break;
    case 'red':
      result = [red, coloringText, close].join('');
      break;
  }
  return result;
};

export default color;