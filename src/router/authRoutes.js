import { authController } from '../modules/auth/auth.controller.js';

export async function authRoutes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: authController.login,
  });
}
