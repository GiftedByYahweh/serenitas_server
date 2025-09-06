import Fastify from 'fastify';
import { StreamForLogger } from './infrastructure/logger.js';
import { appRoutes } from './router/index.js';

const LOG_FOLDER_PATH = './log';

const streamForLogger = new StreamForLogger(LOG_FOLDER_PATH);

const fastify = Fastify({
  logger: { level: 'info', stream: streamForLogger },
});

fastify.register(appRoutes, { prefix: '/api' });

const server = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (error) {
    fastify.log.error(error, 'Server ERROR');
    process.exit(1);
  }
};

void server();
