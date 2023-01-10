'use strict';

export type TListRepositories = 
'backend-javascript-express-ts' | 
'backend-javascript-nest-ts';

export type TRepositories = { 
  [key in TListRepositories]?: string;
};

export interface IMetadataRepository {
  repository?: string;
  pathToSaveBoilerplate?: string;
}