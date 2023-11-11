import 'express-async-errors';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import morganBody from 'morgan-body';

import config from '../config/index.mjs';
import router from './router/index.mjs';

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
morganBody(app);

app.use(
  morgan(config.envs.NODE_ENV === config.constants.NODE_ENVS.DEVELOPMENT ? 'dev' : 'combined'),
);
app.use(morgan(':req[headers] :res[headers]'));
app.use(helmet());
app.use(cors(corsOptions));

app.use('/api', router);
app.use(morgan(':req[headers] :res[headers]'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log('Server error handler');
  console.log(err);
});

let serverInstance;

export const startServer = () => {
  serverInstance = app.listen(config.envs.PORT);
  console.log('Server listening on port:', config.envs.PORT);
};

export const stopServer = () => {
  if (!serverInstance) return;

  serverInstance.close();
};
