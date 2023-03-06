import * as Yup from 'yup';

import { zipCode, address, district, locationNumber, city } from '@utils/validationSchemas/address';
import { email, cellPhone } from '@utils/validationSchemas/contacts';
import { firstName, surname, socialName, cpf, role } from '@utils/validationSchemas/people';

export const head = {
  description: 'Bem-vindo(a) à página de cadastro de colaboradores! Aqui, você pode adicionar novos membros da equipe ao seu sistema com apenas alguns cliques. Você pode inserir facilmente informações de contato e outras informações relevantes. Além disso, nossa plataforma segura garante que todas as informações inseridas sejam mantidas confidenciais e protegidas. Torne sua gestão de equipe mais eficiente.'
};

export interface RegisterEmployeeFormValues {
  cpf: string;
  firstName: string;
  surname: string;
  socialName: string;
  email: string;
  cellPhone: string;
  dateOfBirth: Date;
  role: string;
  zipCode: string;
  address: string;
  district: string;
  locationNumber: string;
  city: string;
  state: string;
}

export const employeeInitialValues: RegisterEmployeeFormValues = {
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
