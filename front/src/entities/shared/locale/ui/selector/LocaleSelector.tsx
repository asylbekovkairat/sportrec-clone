import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import dayjs from 'dayjs';

import { useTranslation } from 'react-i18next';

import { LocaleCodes } from '~shared/lib/l10n';
import { RussiaIcon } from '~shared/ui';

export const LocaleSelector = () => {
  const { i18n } = useTranslation();

  const handleLocaleChange = (event: SelectChangeEvent<LocaleCodes>): void => {
    i18n.changeLanguage(event.target.value as string);
    dayjs.locale(event.target.value as string);
  };

  return (
    <Select
      disableUnderline
      variant="standard"
      defaultValue={LocaleCodes.RUSSIAN}
      onChange={handleLocaleChange}
      sx={{}}
    >
      <MenuItem className="flex items-center gap-3" value={LocaleCodes.RUSSIAN}>
        <RussiaIcon /> {LocaleCodes.RUSSIAN.toUpperCase()}
      </MenuItem>
      <MenuItem className="flex items-center gap-3" value={LocaleCodes.ENGLISH}>
        <RussiaIcon /> {LocaleCodes.ENGLISH.toUpperCase()}
      </MenuItem>
    </Select>
  );
};
