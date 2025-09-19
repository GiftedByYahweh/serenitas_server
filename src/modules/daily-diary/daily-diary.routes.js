export async function dailyDiaryRoutes(fastify) {
  const { dailyDiary: dailyDiaryService } = fastify.services;

  fastify.route({
    method: 'GET',
    url: '/',
    preHandler: fastify.authGuard,
    handler: async (req) => {
      const { userId } = req.session;
      const result = await dailyDiaryService.findAll(userId);
      return { data: result };
    },
  });

  fastify.route({
    method: 'POST',
    url: '/',
    preHandler: fastify.authGuard,
    schema: {
      body: {
        type: 'object',
        required: ['title', 'content'],
        properties: {
          title: { type: 'string' },
          content: { type: 'string' },
          hiddenStatus: { type: 'boolean' },
          isLiked: { type: 'boolean' },
          isPrivate: { type: 'boolean' },
        },
      },
    },
    handler: async (req) => {
      const payload = req.body;
      const { userId } = req.session;
      const result = await dailyDiaryService.create(payload, userId);
      return { data: result };
    },
  });
}
