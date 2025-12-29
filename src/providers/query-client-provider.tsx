'use client';

import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderPrimitive,
} from '@tanstack/react-query';

interface QueryClientProviderProps {
  children: React.ReactNode;
}

const QueryClientProvider: React.FC<QueryClientProviderProps> = ({ children }) => {
  const [client] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 30, // 30 minutes
        },
      },
    });
  });

  return <QueryClientProviderPrimitive client={client}>{children}</QueryClientProviderPrimitive>;
};

export { QueryClientProvider };
