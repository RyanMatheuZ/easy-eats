import * as Yup from 'yup';

import { type IEmployee } from '@ts/interfaces';

import { zipCode, address, district, locationNumber, city, state } from '@utils/validationSchemas/address';
import { email, cellPhone } from '@utils/validationSchemas/contacts';
import { firstName, surname, socialName, cpf, role } from '@utils/validationSchemas/people';
import { formatCellPhone } from '@utils/inputs/cellPhone';
import { formatCEP } from '@utils/inputs/cep';
import { formatCPF } from '@utils/inputs/cpf';

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

export const getFormInitialValues = (employeeValues?: IEmployee) => ({
  firstName: employeeValues?.info.firstName || '',
  surname: employeeValues?.info.surname || '',
  socialName: employeeValues?.info.socialName || '',
  cpf: formatCPF(String(employeeValues?.info.cpf)) || '',
  role: employeeValues?.info.role || '',
  email: employeeValues?.info.email || '',
  cellPhone: formatCellPhone(String(employeeValues?.info.cellPhone)) || '',
  zipCode: formatCEP(String(employeeValues?.address.zipCode)) || '',
  address: employeeValues?.address.address || '',
  district: employeeValues?.address.district || '',
  locationNumber: employeeValues?.address.locationNumber || '',
  city: employeeValues?.address.city || '',
  state: employeeValues?.address.state || '',
  dateOfBirth: employeeValues?.info.dateOfBirth || new Date(),
});

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
