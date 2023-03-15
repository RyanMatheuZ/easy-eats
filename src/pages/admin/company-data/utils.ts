import * as Yup from 'yup';

import { zipCode, address, district, locationNumber, city, state } from '@utils/validationSchemas/address';
import { fantasyName, companyName, cnpj } from '@utils/validationSchemas/company';
import { email } from '@utils/validationSchemas/contacts';
import { firstName, surname, cpf, role } from '@utils/validationSchemas/people';

export const head = {
  description: 'Bem-vindo(a) à página de informações da empresa! Aqui, você pode inserir as informações da sua empresa em nosso sistema, incluindo informações de contato, endereço, descrição do negócio e outras informações. Além disso, nossa plataforma segura garante que todas as informações inseridas sejam mantidas confidenciais e protegidas. Adicionar informações da empresa nunca foi tão fácil e seguro! Experimente agora e torne sua gestão de negócios mais eficiente.'
};

export interface CompanyFormValues {
  fantasyName?: string;
  companyName?: string;
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
  cpf?: string;
  role?: string;
}

export const companyDataSchema = Yup.object().shape({
  fantasyName,
  companyName,
  cnpj,
  email,
  zipCode,
  address,
  district,
  locationNumber,
  city,
  state,
  firstName,
  surname,
  cpf,
  role
});
