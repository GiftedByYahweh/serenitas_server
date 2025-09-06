import { ServiceLocator } from '../../infrastructure/service-locator.js';

const service = ServiceLocator.get('auth');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userData = await service.login(username, password);
    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send(`Faild to login: ${error.message}`);
  }
};

export const authController = {
  login,
};
