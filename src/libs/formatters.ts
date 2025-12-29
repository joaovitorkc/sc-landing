import { dayjs } from './dayjs';

const CEP_REGEX = /^(\d{5})-?(\d{3})$/;
const CPF_REGEX = /^(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})$/;
const CNPJ_REGEX = /^(\d{2}).?(\d{3}).?(\d{3})\/?(\d{4})-?(\d{2})$/;
const CNS_REGEX = /^(\d{3}).?(\d{4}).?(\d{4})-?(\d{4})$/;
const PHONE_REGEX = /^(\d{2})\s?(\d{5})-?(\d{4})$/;

function cpf<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') return fallback || value;

  if (!value) return fallback || value;

  if (!CPF_REGEX.test(value)) {
    return fallback || value;
  }

  return value.replace(CPF_REGEX, '$1.$2.$3-$4');
}

function cnpj<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') return fallback || value;

  if (!value) return fallback || value;

  if (!CNPJ_REGEX.test(value)) {
    return fallback || value;
  }

  return value.replace(CNPJ_REGEX, '$1.$2.$3/$4-$5');
}

function cep<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') return fallback || value;

  if (!value) return fallback || value;

  if (!CEP_REGEX.test(value)) {
    return fallback || value;
  }

  return value.replace(CEP_REGEX, '$1-$2');
}

function cns<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') return fallback || value;

  if (!value) return fallback || value;

  if (!CNS_REGEX.test(value)) {
    return fallback || value;
  }

  return value.replace(CNS_REGEX, '$1 $2 $3 $4');
}

function phone<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') return fallback || value;

  if (!value) return fallback || value;

  if (!PHONE_REGEX.test(value)) {
    return fallback || value;
  }

  return value.replace(PHONE_REGEX, '($1) $2-$3');
}

function dateTime<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') return fallback || value;

  if (!value) return fallback || value;

  return dayjs(value).format('DD/MM/YYYY HH:mm');
}

function date<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') return fallback || value;

  if (!value) return fallback || value;

  return dayjs(value).format('DD/MM/YYYY');
}

function nullable<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  return value || fallback || 'Não informado';
}

function boolean<T = unknown>(value?: T): T | string | undefined {
  return value ? 'Sim' : 'Não';
}

function age<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  if (typeof value !== 'string') {
    return fallback || value;
  }

  const date = dayjs(value);
  const today = dayjs();

  if (!date) return fallback || value;

  const years = today.diff(date, 'years');
  const months = today.diff(dayjs(date).add(years, 'years'), 'months');

  let age = '';

  if (years > 0) {
    age += `${years} ano${years > 1 ? 's' : ''}`;
  }

  if (months > 0) {
    age += ` e ${months} m${months > 1 ? 'eses' : 'ês'}`;
  }

  return age;
}

function currency<T = unknown>(value?: T, fallback?: string): T | string | undefined {
  const parsedValue = parseFloat(value?.toString() || '');

  if (isNaN(parsedValue)) return fallback || value;

  return parsedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function size(size: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index++;
  }

  return `${size.toFixed(2)} ${units[index]}`;
}

function dateDistance(value?: string | Date, fallback?: string): string | undefined {
  const _ = dayjs(value);

  if (!_.isValid() || !value) return fallback;

  return _.fromNow();
}

function percentage(value?: number | null, fallback?: string): string | undefined {
  if (typeof value !== 'number') return fallback;

  return `${(value * 100).toFixed(2).replace('.', ',')}`;
}

const formatters = {
  cpf,
  cnpj,
  phone,
  dateTime,
  date,
  cns,
  cep,
  nullable,
  boolean,
  age,
  currency,
  size,
  dateDistance,
  percentage,
};

export { formatters };
