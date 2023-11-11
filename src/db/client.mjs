import { MongoClient } from 'mongodb';

import config from '../config/index.mjs';

const client = new MongoClient(config.envs.MONGODB_URI);

const database = client.db(config.envs.MONGODB_DB);

export default database;
