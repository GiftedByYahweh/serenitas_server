export function userService(repo) {
  const usersRepo = repo['User'];

  async function create(payload) {
    const newUser = await usersRepo.create({ data: { payload } });
    return newUser.rows[0];
  }

  async function findByEmail(email) {
    const user = await usersRepo.findUnique({ where: { email } });
    return user;
  }

  return { create, findByEmail };
}
