export function userService({ repo }) {
  const usersRepo = repo('users');

  async function create(payload) {
    const newUser = await usersRepo.create(payload);
    return newUser.rows[0];
  }
  async function findByEmail(email) {
    const { rows } = await usersRepo.findOne('email', email);
    return rows[0];
  }

  return { create, findByEmail };
}
