import { common } from './common/index.js';
import { ServiceLocator } from './infrastructure/service-locator.js';
import { authService } from './modules/auth/auth.service.js';
import { userService } from './modules/users/users.service.js';

ServiceLocator.set('db', null);
ServiceLocator.set('common', common);
ServiceLocator.set('users', userService);
ServiceLocator.set('auth', authService);
