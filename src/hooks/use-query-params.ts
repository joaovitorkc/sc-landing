'use client';

import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

type ParamValue = string | undefined | null;

function useQueryParams() {
  const params = useSearchParams();

  const refresh = useCallback((newParams: URLSearchParams) => {
    window.history.replaceState(null, '', '?' + newParams.toString());
  }, []);

  const setParam = useCallback(
    (key: Record<string, ParamValue> | string, value?: string) => {

      if (typeof key === 'string' && typeof value === 'string') {
        const newParams = new URLSearchParams(params.toString());

        newParams.set(key, value);

        refresh(newParams);
      }

      if (typeof key === 'object') {
        const newParams = new URLSearchParams(params.toString());

        Object.entries(key).forEach(([key, value]) => {
          if (value === undefined || value === null || value === '') {
            newParams.delete(key);
          }
          else {
            newParams.set(key, value);
          }
        });

        refresh(newParams);
      }
    },
    [params, refresh]
  );

  const removeParam = useCallback(
    (key: string) => {
      const newParams = new URLSearchParams(params.toString());

      newParams.delete(key);

      refresh(newParams);
    },
    [params, refresh]
  );

  return {
    params,
    setParam,
    removeParam,
  };
}

export { useQueryParams };
