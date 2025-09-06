import fp from 'fastify-plugin';
import { authRoutes } from './authRoutes.js';

export default fp(async (fastify) => {
  fastify.register(authRoutes, { prefix: '/api/auth' });
});
