import * as Yup from 'yup';

import { zipCode, address, district, city } from '@utils/validationSchemas/address';
import { email, cellPhone } from '@utils/validationSchemas/contacts';
import { firstName, surname, socialName, cpf, role } from '@utils/validationSchemas/people';

export const employeeInitialValues = {
  cpf: '',
  firstName: '',
  surname: '',
  socialName: '',
  email: '',
  cellPhone: '',
  dateOfBirth: new Date(),
  role: '',
  zipCode: '',
  address: '',
  district: '',
  city: '',
  state: ''
};

export const registerEmployeeSchema = Yup.object().shape({
  cpf,
  firstName,
  surname,
  socialName,
  email,
  cellPhone,
  role,
  zipCode,
  address,
  district,
  city
});
