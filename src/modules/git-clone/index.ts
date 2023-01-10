'use strict';

// Lib
import impl from './lib/impl.js';

// Types
import { IOptions } from './types/index.js';

const clone = (repo: string, targetPath: string, opts?: IOptions) => {
  return new Promise((yes, no) => {
    impl(repo, targetPath, opts || {}, yes, no);
  });
};

export default clone;