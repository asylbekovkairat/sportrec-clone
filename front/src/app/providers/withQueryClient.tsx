import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppProps } from '~app/types';

const queryClient = new QueryClient();

export const withQueryClient = (component: Component) => (props: AppProps) => {
  return <QueryClientProvider client={queryClient}>{component(props)}</QueryClientProvider>;
};
