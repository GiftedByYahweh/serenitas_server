import { common } from './common/index.js';
import { ServiceLocator } from './infrastructure/service-locator.js';
import { authService } from './modules/auth/auth.service.js';
import { userService } from './modules/users/users.service.js';
import db from './infrastructure/db.js';

ServiceLocator.set('db', db);
ServiceLocator.set('common', common);
// services
ServiceLocator.set('users', userService);
ServiceLocator.set('auth', authService);
