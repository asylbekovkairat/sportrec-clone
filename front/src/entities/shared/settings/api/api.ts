import { routes } from './routes';
import { ApiSettingsData } from './types';

export const getSettings = () => {
  let response;

  try {
    response = {};
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
