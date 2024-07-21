import { useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';

import type { TypedSupabaseClient } from './types';

let client: TypedSupabaseClient | undefined;

function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  client = createBrowserClient<any>(process.env.VITE_DB_ANON!, process.env.VITE_API_URL!);

  return client;
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;
