import { ServiceLocator } from '../../infrastructure/service-locator.js';

const common = ServiceLocator.get('common');
const userService = ServiceLocator.get('users');

const login = async ({ email, password }) => {
  if (!email || !password) throw new Error('Invalid data');
  const currentUser = await userService.findByEmail(email);
  if (!currentUser) throw new Error('Wrong email or password');
  const correctPassword = common.crypto.verify(currentUser.password, password);
  if (!correctPassword) throw new Error('Wrong email or password');
  const generatedSession = await common.crypto.generate(currentUser.id);
  return { userId: currentUser.id, session: generatedSession };
};

const registration = async (payload) => {
  const { email, username, password } = payload;
  if (!email || !username || !password) throw new Error('Invalid data');
  const registratedUser = await userService.findByEmail(email);
  if (registratedUser) throw new Error(`User ${email} already exist`);
  const hashPassword = await common.crypto.hash(password);
  const regastratedUser = await userService.create({
    email,
    password: hashPassword,
    username,
  });
  return { userId: regastratedUser.id };
};

export const authService = {
  login: (payload) => login(payload),
  registration: (payload) => registration(payload),
};
