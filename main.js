import pg from 'pg';
import 'dotenv/config';
import Fastify from 'fastify';
import { appServices } from './src/setup.js';
import appRoutes from './src/router/index.js';
import { appConfig } from './src/appConfig.js';
import { StreamForLogger } from './src/infrastructure/logger.js';
import { httpErrorHandler } from './src/infrastructure/httpErrorHandling.js';

const LOG_FOLDER_PATH = './log';

const streamForLogger = new StreamForLogger(LOG_FOLDER_PATH);

const fastify = Fastify({
  logger: { level: 'info', stream: streamForLogger },
});
fastify.setErrorHandler(httpErrorHandler);
fastify.decorate('services', appServices);
await fastify.register(appRoutes);

const server = async () => {
  try {
    const db = new pg.Client(appConfig.db);
    await db.connect();
    await fastify.listen({ port: appConfig.port });
  } catch (error) {
    fastify.log.error(error, 'Server ERROR');
    process.exit(1);
  }
};

void server();
