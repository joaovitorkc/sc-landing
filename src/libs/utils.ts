import _ from 'lodash';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { api } from './api';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNameInitials(name: string = '') {
  return name
    .split(' ')
    .map((char) => char.trim()[0])
    .filter((char) => !!char)
    .splice(0, 2)
    .join('');
}

export function jsonToCamelCase(json: object, options?: { deep?: boolean }): object {
  if (Array.isArray(json)) {
    return json.map((item) => jsonToCamelCase(item));
  }

  return Object.entries(json).reduce((acc, [key, value]) => {
    const newKey = _.camelCase(key);
    const newValue =
      options?.deep && typeof value === 'object' && value !== null
        ? jsonToCamelCase(value, options)
        : value;

    acc[newKey] = newValue;
    return acc;
  }, {} as Record<string, unknown>);
}

export function jsonToSnakeCase(json: object, options?: { deep?: boolean }): object {
  if (Array.isArray(json)) {
    return json.map((item) => jsonToSnakeCase(item));
  }

  return Object.entries(json).reduce((acc, [key, value]) => {
    const newKey = _.snakeCase(key);
    const newValue =
      options?.deep && typeof value === 'object' && value !== null
        ? jsonToSnakeCase(value, options)
        : value;

    acc[newKey] = newValue;
    return acc;
  }, {} as Record<string, unknown>);
}

export function stringToSnakeCase(str: string): string {
  return _.snakeCase(str);
}

export async function handleDownload(name: string) {
  try {
    const response = await api.get(`/attachments/${name}`, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(response.data);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('There was a problem with the download operation:', error);
  }
}

export async function handleView(name: string) {
  try {
    const response = await api.get(`/attachments/${name}`, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(response.data);
    window.open(url, "_blank");

    setTimeout(() => window.URL.revokeObjectURL(url), 10000);
  } catch (error) {
    console.error('There was a problem opening the file:', error);
  }
}

export function removeAccent(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\.-]/g, '');
}
