import ngrok from 'ngrok';

import config from './src/config/index.mjs';

(async function () {
  const url = await ngrok.connect(config.envs.PORT);

  console.log('NGROK:', url);
})();
