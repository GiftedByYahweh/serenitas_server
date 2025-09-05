import Fastify from 'fastify';

import { appRoutes } from './routes.js';
import { StreamForLogger } from './infrastructure/logger.js';

const LOG_FOLDER_PATH = './log';

const streamForLogger = new StreamForLogger(LOG_FOLDER_PATH);

const fastify = Fastify({
  logger: { level: 'info', stream: streamForLogger },
});

fastify.register(appRoutes, { prefix: '/app' });

const server = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (error) {
    console.error(error);
  }
};

void server();
