import * as Yup from 'yup';

import { zipCode, address, district, city } from '@utils/validationSchemas/address';
import { fantasyName, cnpj } from '@utils/validationSchemas/company';
import { email } from '@utils/validationSchemas/contacts';
import { firstName, surname, role } from '@utils/validationSchemas/people';

export const companyDataSchema = Yup.object().shape({
  fantasyName,
  cnpj,
  email,
  zipCode,
  address,
  district,
  city,
  firstName,
  surname,
  role
});
