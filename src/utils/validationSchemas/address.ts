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
    .required('Você deve inserir um bairro!'),
  locationNumber: Yup
    .string()
    .max(4, 'O número deve ter no máximo 4 caracteres!')
    .optional(),
  city: Yup
    .string()
    .min(5, 'A cidade deve ter no mínimo 3 caracteres!')
    .required('Você deve inserir uma cidade!'),
  state: Yup
    .string()
    .required('Você deve inserir um estado!')
};

export const {
  zipCode,
  address,
  district,
  locationNumber,
  city,
  state
} = schemas;
