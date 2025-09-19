import { cryptoService } from './crypto.js';
import { ApiError } from './api-error.js';

export const common = {
  crypto: cryptoService,
  apiError: ApiError,
};
