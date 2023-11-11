import { startServer, stopServer } from './server/index.mjs';

const main = async () => {
  startServer();
};

main().catch((err) => {
  console.log('Error in main', err);
  stopServer();
});
