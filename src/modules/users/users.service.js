export function userService({ repo }) {
  const create = async (name) => await repo.findOne({ where: name });

  const findByEmail = async (email) => {
    const result = await repo.findOne({
      where: { email },
    });
    return result;
  };

  return { create, findByEmail };
}
