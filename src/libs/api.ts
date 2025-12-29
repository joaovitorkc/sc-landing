import axios, { AxiosError } from 'axios';
import { jsonToCamelCase, jsonToSnakeCase } from './utils';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const DEFAULT_ERROR_MESSAGE = 'Algo deu errado';

api.interceptors.request.use((config) => {
  if (config.params) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const processedParams: Record<string, any> = {};

    for (const [key, value] of Object.entries(config.params)) {
      // Converte a chave (ex: teamTypes -> team_types)
      const snakeKey = key.replace(/[A-Z]/g, (l) => `_${l.toLowerCase()}`);

      if (Array.isArray(value)) {
        // Se for array, apenas "achata" para evitar o types[0][0]
        processedParams[snakeKey] = value.flat();
      } else if (typeof value === 'object' && value !== null) {
        // Se for objeto (e não array), faz a conversão profunda
        processedParams[snakeKey] = jsonToSnakeCase(value, { deep: true });
      } else {
        // Valores primitivos
        processedParams[snakeKey] = value;
      }
    }

    config.params = processedParams;
  }

  if (!['POST', 'PUT', 'PATCH'].includes(config.method?.toUpperCase() || 'GET')) {
    return config;
  }

  if (config.data instanceof FormData) {
    return config;
  }

  const isJSON = typeof config.data === 'object';

  if (isJSON) {
    config.data = jsonToSnakeCase(config.data, { deep: true });
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response.headers['content-type']?.includes('application/json')) {
      response.data = jsonToCamelCase(response.data, { deep: true });
    }

    return response;
  },
  (error) => {
    let message = DEFAULT_ERROR_MESSAGE;

    if (error instanceof AxiosError) {
      message = error.response?.data.error;
    } else {
      console.error(error);
    }

    throw new Error(message || DEFAULT_ERROR_MESSAGE);
  }
);

function parseApiError(error: unknown): Error {
  let message = 'Algo deu errado';

  if (error instanceof AxiosError) {
    message = error.response?.data.error;
  } else {
    console.error(error);
  }

  return new Error(message);
}

export { api, parseApiError };
