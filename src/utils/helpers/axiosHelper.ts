import { AxiosError } from 'axios';

import Logger from './Logger';

// We need this handler to throw the status code
// Otherwise the status code will not ne accessible inside the screens
export const AxiosErrorHandler = (err: AxiosError) => {
  Logger.trace('Axios error:');
  Logger.recordError(err);
  Logger.trace(err?.response?.config?.url || err?.message);
  if (err.response && err.response.status) {
    return Promise.reject(err.response.status);
  }
  return Promise.reject(err);
};
