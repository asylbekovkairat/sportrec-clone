import { LocaleSelector } from '~entities/shared/locale';

export interface SetLocaleViewProps {}

export const SetLocaleView: React.FC<SetLocaleViewProps> = () => {
  return <LocaleSelector />;
};
