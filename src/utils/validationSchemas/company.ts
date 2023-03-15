import * as Yup from 'yup';

import { validateCNPJ } from '@utils/inputs/cnpj';
import { hasOnlyNumbers } from '@utils/inputs/has';

const schemas = {
  fantasyName: Yup
    .string()
    .required('Você deve inserir o nome fantasia!')
    .test(
      'isValidFantasyName',
      'Esse nome não pode ser numérico!',
      (value) => !hasOnlyNumbers(value || '')
    ),
  companyName: Yup
    .string()
    .required('Você deve inserir o nome da empresa!')
    .test(
      'isValidCompanyName',
      'Esse nome não pode ser numérico!',
      (value) => !hasOnlyNumbers(value || '')
    ),
  cnpj: Yup
    .string()
    .required('Você deve inserir o CNPJ!')
    .test(
      'isValidCNPJ',
      'Esse CNPJ não é válido!',
      (value) => validateCNPJ(value || '')
    ),
  password: Yup
    .string()
    .min(8, 'Sua senha deve ter no mínimo 8 caracteres!')
    .required('Você deve inserir uma senha!'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'As senhas não conferem!')
    .required('Você deve confirmar a senha!'),
};

export const {
  fantasyName,
  companyName,
  cnpj,
  password,
  confirmPassword
} = schemas;
