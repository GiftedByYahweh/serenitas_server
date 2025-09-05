export async function appRoutes(fastify) {
  fastify.get('/', (req, reply) => {
    req.log.info({ user: 'call father serializer', key: 'another key' });
    reply.send('asdlfnasljfdnasljdnlj');
  });
}
