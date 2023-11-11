import * as dotEnv from 'dotenv';

dotEnv.config();

const constants = {
  NODE_ENVS: {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
  },
  DB: {
    POINTS_NAME: 'points',
  },
};

const nodeEnv =
  Object.values(constants.NODE_ENVS).find((value) => process.env.NODE_ENV === value) ||
  constants.NODE_ENVS.PRODUCTION;

const envs = {
  NODE_ENV: nodeEnv,
  PORT: parseInt(process.env.PORT || 3000, 10),

  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DB: process.env.MONGODB_DB,
};

export default {
  envs,
  constants,
};
