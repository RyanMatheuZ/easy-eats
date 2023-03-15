import * as Yup from 'yup';

import { zipCode, address, district, locationNumber, city, state } from '@utils/validationSchemas/address';
import { email, cellPhone } from '@utils/validationSchemas/contacts';
import { firstName, surname, socialName, cpf, role } from '@utils/validationSchemas/people';

export interface ViewEmployeeFormValues {
  firstName: string;
  surname: string;
  socialName: string;
  cpf: string;
  role: string;
  email: string;
  cellPhone: string;
  zipCode: string;
  address: string;
  district: string;
  locationNumber: string;
  city: string;
  state: string;
  dateOfBirth: Date;
}

export const viewEmployeeSchema = Yup.object().shape({
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
  locationNumber,
  city,
  state
});
