import { userService } from './modules/users/index.js';
import { authService } from './modules/auth/index.js';
import { dailyDiaryService } from './modules/daily-diary/index.js';

export const appServices = (repo, common) => {
  const user = userService(repo);
  const auth = authService(user, common);
  const dailyDiary = dailyDiaryService(repo);
  return { user, auth, dailyDiary };
};
