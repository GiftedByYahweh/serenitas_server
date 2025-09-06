import { ServiceLocator } from '../../infrastructure/service-locator.js';

const repo = ServiceLocator.get('db');

const create = async (name) => await repo.findOne({ where: name });

const findByEmail = async (email) =>
  await repo.findOne({
    where: { email },
  });

export const userService = {
  create: (name) => create(name),
  findByEmail: (email) => findByEmail(email),
};
