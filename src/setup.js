import { userService } from './modules/users/users.service.js';
import { authService } from './modules/auth/auth.service.js';

export const appServices = (repo, common) => {
  const user = userService({ repo });
  const auth = authService(user, common);
  return { user, auth };
};
