import * as Yup from 'yup';

import { validateCPF } from '@utils/inputs/cpf';

const schemas = {
  firstName: Yup
    .string()
    .min(3, 'O nome deve ter no mínimo 3 caracteres!')
    .required('Você deve inserir um nome!'),
  surname: Yup
    .string()
    .min(3, 'O sobrenome deve ter no mínimo 3 caracteres!')
    .required('Você deve inserir um sobrenome!'),
  socialName: Yup
    .string()
    .min(3, 'O nome social deve ter no mínimo 3 caracteres!')
    .optional(),
  cpf: Yup
    .string()
    .required('Você deve inserir um CPF!')
    .test(
      'isValidCPF',
      'Esse CPF não é válido!',
      (value) => validateCPF(value || '')
    ),
  role: Yup
    .string()
    .min(5, 'O cargo/função deve ter no mínimo 5 caracteres!')
    .required('Você deve inserir o cargo/função!')
};

export const {
  firstName,
  surname,
  socialName,
  cpf,
  role
} = schemas;
