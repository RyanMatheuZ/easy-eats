import * as Yup from 'yup';

const schemas = {
  zipCode: Yup
    .string()
    .required('Você deve inserir um CEP!'),
  address: Yup
    .string()
    .min(10, 'O endereço deve ter no mínimo 10 caracteres!')
    .required('Você deve inserir um endereço!'),
  district: Yup
    .string()
    .min(10, 'O bairro deve ter no mínimo 10 caracteres!')
    .required('Você deve inserir um bairro!'),
  city: Yup
    .string()
    .min(5, 'A cidade deve ter no mínimo 5 caracteres!')
    .required('Você deve inserir uma cidade!')
};

export const {
  zipCode,
  address,
  district,
  city
} = schemas;