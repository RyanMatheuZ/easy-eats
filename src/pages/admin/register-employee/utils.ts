import * as Yup from 'yup';

import type { IRegisterEmployee } from '@ts/interfaces';

import { zipCode, address, district, locationNumber, city } from '@utils/validationSchemas/address';
import { email, cellPhone } from '@utils/validationSchemas/contacts';
import { firstName, surname, socialName, cpf, role } from '@utils/validationSchemas/people';

export const head = {
  description: 'Bem-vindo(a) à página de cadastro de colaboradores! Aqui, você pode adicionar novos membros da equipe ao seu sistema com apenas alguns cliques. Você pode inserir facilmente informações de contato e outras informações relevantes. Além disso, nossa plataforma segura garante que todas as informações inseridas sejam mantidas confidenciais e protegidas. Torne sua gestão de equipe mais eficiente.'
};

export const employeeInitialValues: IRegisterEmployee = {
  cpf: '',
  firstName: '',
  surname: '',
  socialName: '',
  email: '',
  cellPhone: '',
  dateOfBirth: new Date(),
  role: '',
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
  socialName,
  email,
  cellPhone,
  role,
  zipCode,
  address,
  district,
  locationNumber,
  city
});
