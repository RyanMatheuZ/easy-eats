import * as Yup from 'yup';

import { hasOnlyNumbers, validateCNPJ } from '@utils/inputs';

export interface SignUpValues {
  fantasyName: string;
  cnpj: string;
  email: string;
  password: string;
}

export const signUpInitialValues: SignUpValues = {
  fantasyName: '',
  cnpj: '',
  email: '',
  password: ''
};

export const signUpSchema = Yup.object().shape({
  fantasyName: Yup
    .string()
    .required('Você deve inserir o nome fantasia!')
    .test(
      'isSantasyNameValid',
      'Esse nome não pode ser numérico!',
      (value) => hasOnlyNumbers(value || '')
    ),
  cnpj: Yup
    .string()
    .required('Você deve inserir o CNPJ!')
    .test(
      'isCNPJValid',
      'Esse CNPJ não é válido!',
      (value) => validateCNPJ(value || '')
    ),
  email: Yup
    .string()
    .email('Você deve inserir um e-mail válido!')
    .required('Você deve inserir um e-mail!'),
  password: Yup
    .string()
    .min(8, 'Sua senha deve ter no mínimo 8 caracteres!')
    .required('Você deve inserir uma senha!')
});
