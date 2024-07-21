import { enLocale } from './en-US';
import { ruLocale } from './ru-RU';
import { LocaleCodes } from './types';

export * from './types';

const lang = localStorage.getItem('lang');
let localLocale = LocaleCodes.RUSSIAN;

if (lang === LocaleCodes.ENGLISH) {
  localLocale = LocaleCodes.ENGLISH;
}

export const defaultLocale = localLocale;

export const locales = {
  [LocaleCodes.ENGLISH]: enLocale,
  [LocaleCodes.RUSSIAN]: ruLocale,
};
