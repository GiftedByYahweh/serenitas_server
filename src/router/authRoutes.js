import { authController } from '../modules/auth/auth.controller.js';

export async function authRoutes(fastify) {
  fastify.route({
    method: 'POST',
    url: '/login',
    handler: authController.login,
  });
}
