export * from './tables';
export * from './navigation';
export * from './filters';

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  totalPages: number;
  data: T[];
}
