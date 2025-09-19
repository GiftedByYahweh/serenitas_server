export async function authRoutes(fastify) {
  const { auth: authService } = fastify.services;

  fastify.route({
    method: 'POST',
    url: '/login',
    handler: async (req) => {
      const { email, password } = req.body;
      const result = await authService.login({ email, password });
      req.session.userId = result.id;
      return { data: result };
    },
  });

  fastify.route({
    method: 'POST',
    url: '/registration',
    handler: async (req) => {
      const { email, password, username } = req.body;
      const result = await authService.registration({
        email,
        username,
        password,
      });
      req.session.userId = result.id;
      return { data: result };
    },
  });
}
