import { cryptoService } from './crypto.js';
import { ApiError } from './apiError.js';

export const common = {
  crypto: cryptoService,
  apiError: ApiError,
};
