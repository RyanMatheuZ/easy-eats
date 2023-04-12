import * as Yup from 'yup';

import { type IEmployee } from '@ts/interfaces';

import { zipCode, address, district, locationNumber, city, state } from '@utils/validationSchemas/address';
import { email, cellPhone } from '@utils/validationSchemas/contacts';
import { firstName, surname, gender, socialName, cpf, admissionDate, resignationDate, dateOfBirth, role, salary } from '@utils/validationSchemas/people';
import { formatCellPhone } from '@utils/inputs/cellPhone';
import { formatCEP } from '@utils/inputs/cep';
import { formatCPF } from '@utils/inputs/cpf';
import { formatMoney } from '@utils/inputs/money';

export type ViewEmployeeFormValues = IEmployee['info'] & { resignationDate: Date | undefined } & IEmployee['address']

const handleCheckDate = (date?: Date) => {
  return date ? new Date(String(date)) : undefined;
};

export const getFormInitialValues = (employeeValues?: IEmployee) => ({
  firstName: employeeValues?.info.firstName || '',
  surname: employeeValues?.info.surname || '',
  socialName: employeeValues?.info.socialName || '',
  cpf: formatCPF(String(employeeValues?.info.cpf)) || '',
  gender: employeeValues?.info.gender || '',
  admissionDate: new Date(String(employeeValues?.info.admissionDate)),
  resignationDate: handleCheckDate(employeeValues?.info.resignationDate),
  dateOfBirth: new Date(String(employeeValues?.info.dateOfBirth)),
  role: employeeValues?.info.role || '',
  salary: formatMoney(Number(employeeValues?.info.salary)).formattedExistingValue || 0,
  email: employeeValues?.info.email || '',
  cellPhone: formatCellPhone(String(employeeValues?.info.cellPhone)) || '',
  zipCode: formatCEP(String(employeeValues?.address.zipCode)) || '',
  address: employeeValues?.address.address || '',
  district: employeeValues?.address.district || '',
  locationNumber: employeeValues?.address.locationNumber || '',
  city: employeeValues?.address.city || '',
  state: employeeValues?.address.state || ''
});

export const viewEmployeeSchema = Yup.object().shape({
  cpf,
  firstName,
  surname,
  gender,
  socialName,
  email,
  cellPhone,
  admissionDate,
  resignationDate,
  dateOfBirth,
  role,
  salary,
  zipCode,
  address,
  district,
  locationNumber,
  city,
  state
});
