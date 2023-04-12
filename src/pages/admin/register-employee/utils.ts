import * as Yup from 'yup';

import type { IEmployee } from '@ts/interfaces';

import { zipCode, address, district, locationNumber, city, state } from '@utils/validationSchemas/address';
import { email, cellPhone } from '@utils/validationSchemas/contacts';
import { firstName, surname, gender, socialName, cpf, dateOfBirth, admissionDate, role, salary } from '@utils/validationSchemas/people';

export type EmployeeFormValues = Omit<IEmployee['info'], 'resignationDate'> & IEmployee['address'] & IEmployee['security'];

export const head = {
  description: 'Bem-vindo(a) à página de cadastro de colaboradores! Aqui, você pode adicionar novos membros da equipe ao seu sistema com apenas alguns cliques. Você pode inserir facilmente informações de contato e outras informações relevantes. Além disso, nossa plataforma segura garante que todas as informações inseridas sejam mantidas confidenciais e protegidas. Torne sua gestão de equipe mais eficiente.'
};

export const employeeInitialValues: EmployeeFormValues = {
  cpf: '',
  firstName: '',
  surname: '',
  gender: '',
  socialName: '',
  email: '',
  cellPhone: '',
  dateOfBirth: undefined as unknown as Date,
  admissionDate: undefined as unknown as Date,
  role: '',
  salary: 0,
  password: '',
  confirmPassword: '',
  zipCode: '',
  address: '',
  district: '',
  locationNumber: '',
  city: '',
  state: ''
};

export const registerEmployeeSchema = Yup.object().shape({
  cpf,
  firstName,
  surname,
  gender,
  socialName,
  email,
  cellPhone,
  dateOfBirth,
  admissionDate,
  role,
  salary,
  zipCode,
  address,
  district,
  locationNumber,
  city,
  state
});
