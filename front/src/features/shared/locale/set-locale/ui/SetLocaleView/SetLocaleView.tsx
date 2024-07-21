import { i18n, useTranslation } from '~shared/lib/i18n';
import { dayjs } from '~shared/lib/time';
import { useWindowInnerWidth } from '~shared/ui';

import { LocaleCodes } from '../../model';

export interface SetLocaleViewProps {}

export const SetLocaleView: React.FC<SetLocaleViewProps> = () => {
  const { t } = useTranslation();
  const windowWidth = useWindowInnerWidth();

  const handleLocaleChange = (payload: string | number) => {
    i18n.changeLanguage(payload as string);
    dayjs.locale(payload as string);
  };

  return (
    <div className="w-full">
      <p>{t('locale.language')}</p>
    </div>
  );
};
