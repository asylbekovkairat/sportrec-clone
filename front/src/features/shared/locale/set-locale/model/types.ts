export enum LocaleCodes {
  ENGLISH = 'en',
  RUSSIAN = 'ru',
}

export type DynamicLocaleType = (typeof LocaleCodes)[keyof typeof LocaleCodes];
