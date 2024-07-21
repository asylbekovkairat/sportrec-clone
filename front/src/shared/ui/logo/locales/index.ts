import { LocaleCodes } from '~shared/lib/l10n';

import { enLocale } from './en-US';
import { ruLocale } from './ru-RU';

export const locales = {
  [LocaleCodes.RUSSIAN]: { ...ruLocale },
  [LocaleCodes.ENGLISH]: { ...enLocale },
};
