import { common } from './common/index.js';
import db from './infrastructure/db.js';
import { userService } from './modules/users/users.service.js';
import { authService } from './modules/auth/auth.service.js';

const registerServices = (db, common) => {
  const user = userService({ db });
  const auth = authService(user, common);
  return { user, auth };
};

export const appServices = registerServices(db, common);
