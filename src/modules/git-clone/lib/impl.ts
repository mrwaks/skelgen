'use strict';

// Core Modules
import { spawn } from 'child_process';

// Types
import { IOptions } from '../types/index.js';

// Utils
import {
  buildCloneCommand,
  buildCheckoutCommand,
} from './util.js';

const impl = (repo: string, targetPath: string, opts: IOptions, onSuccess: Function, onError: Function) => {
  const [cmd, args] = buildCloneCommand(repo, targetPath, opts);
  const checkout = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const [cmd, args] = buildCheckoutCommand(opts.checkout as string, opts);
    const proc = spawn(cmd, args, { cwd: targetPath });
    proc.on('close', function (status) {
      if (status == 0) {
        onSuccess();
      } else {
        onError(new Error("'git checkout' failed with status " + status));
      }
    });
  };
  const proc = spawn(cmd, args);
  proc.on('close', (status) => {
    if (status == 0) {
      if (opts.checkout) {
        checkout();
      } else {
        onSuccess();   
      }
    } else {
      onError(new Error("'git clone' failed with status " + status));
    }
  });
};

export default impl;