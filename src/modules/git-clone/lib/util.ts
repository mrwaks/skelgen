'use strict';

const git = (opts: any) => {
  return opts.git || 'git';
};

export const buildCloneCommand = (repo: any, targetPath: any, opts: any) => {
  let args = ['clone'];
  const userArgs = opts.args || [];

  if (opts.shallow) {
    if (userArgs.indexOf('--depth') >= 0) {
	  throw new Error("'--depth' cannot be specified when shallow is set to 'true'");
    }
    args.push('--depth', '1');
  }

  args = args.concat(userArgs);
  args.push('--', repo, targetPath);

  return [git(opts), args];
};

export const buildCheckoutCommand = (ref: string, opts: any) => {
  return [git(opts), ['checkout', ref]];
};