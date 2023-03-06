import * as Yup from 'yup';

import { zipCode, address, district, locationNumber, city } from '@utils/validationSchemas/address';
import { fantasyName, cnpj } from '@utils/validationSchemas/company';
import { email } from '@utils/validationSchemas/contacts';
import { firstName, surname, role } from '@utils/validationSchemas/people';

export interface CompanyFormValues {
  fantasyName?: string;
  cnpj?: string;
  email?: string;
  zipCode?: string;
  address?: string;
  district?: string;
  locationNumber?: string;
  city?: string;
  state?: string;
  firstName?: string;
  surname?: string;
  role?: string;
}

export const companyDataSchema = Yup.object().shape({
  fantasyName,
  cnpj,
  email,
  zipCode,
  address,
  district,
  locationNumber,
  city,
  firstName,
  surname,
  role
});
