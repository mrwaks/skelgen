'use strict';

// Types
import { IBoilerPlateConfig } from '../../types.common.js';

const generateNameByBoilerplateConfig = (boilerplateConfig: Partial<IBoilerPlateConfig>) => {
  return [
    boilerplateConfig.environment?.toLowerCase().trim(),
    boilerplateConfig.language?.toLowerCase().trim(),
    boilerplateConfig.framework?.toLowerCase().trim(),
    boilerplateConfig.typescript === false ? undefined : boilerplateConfig.typescript === true ? 'ts' : undefined,
  ]
    .filter(value => value !== undefined)
    .join('-');
};

export default generateNameByBoilerplateConfig;