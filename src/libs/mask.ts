import type { MaskitoOptions } from '@maskito/core';

export const cpfMaskOptions: MaskitoOptions = {
  mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
};

export const cnpjMaskOptions: MaskitoOptions = {
  mask: [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
};

export const phoneMaskOptions: MaskitoOptions = {
  mask: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
};

export const cnesMaskOptions: MaskitoOptions = {
  mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
};

export const dateMaskOptions: MaskitoOptions = {
  mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
};

export const cepMaskOptions: MaskitoOptions = {
  mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
};
