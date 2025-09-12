import 'dotenv/config';
import Fastify from 'fastify';
import { appServices } from './src/setup.js';
import appRoutes from './src/router/index.js';
import { appConfig } from './src/appConfig.js';
import initDatabase from './src/infrastructure/db.js';
import { StreamForLogger } from './src/infrastructure/logger.js';
import { httpErrorHandler } from './src/infrastructure/httpErrorHandling.js';
import { common } from './src/common/index.js';

const LOG_FOLDER_PATH = './log';
const streamForLogger = new StreamForLogger(LOG_FOLDER_PATH);

const database = initDatabase(appConfig.db);

const fastify = Fastify({
  logger: { level: 'info', stream: streamForLogger },
});

fastify.setErrorHandler(httpErrorHandler);
fastify.decorate('services', appServices(database, common));

await fastify.register(appRoutes);

const server = async () => {
  try {
    await fastify.listen({ port: appConfig.port });
  } catch (error) {
    fastify.log.error(error, 'Server ERROR');
    process.exit(1);
  }
};

void server();
