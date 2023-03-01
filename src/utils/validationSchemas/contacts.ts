import * as Yup from 'yup';

const schemas = {
  email: Yup
    .string()
    .email('Você deve inserir um e-mail válido!')
    .required('Você deve inserir um e-mail!'),
  cellPhone: Yup
    .string()
    .required('Você deve inserir um número de celular!')
};

export const {
  email,
  cellPhone
} = schemas;
