import { IAddress } from '@ts/interfaces';

export const formatCEP = (cep: IAddress['cep']): string => {
  return cep
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
};
