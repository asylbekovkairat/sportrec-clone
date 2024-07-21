import compose from 'compose-function';

import { withHelmet } from './withHelmet';
import { withLocalization } from './withLocalization';
import { withRouter } from './withRouter';
import { withTime } from './withTime';
import { withQueryClient } from './withQueryClient';

export const withProviders = compose<any>(
  withTime,
  withLocalization,
  withHelmet,
  withRouter,
  withQueryClient
);
