import * as Yup from 'yup';

import { type ICompany } from '@ts/interfaces';

import { zipCode, address, district, locationNumber, city, state } from '@utils/validationSchemas/address';
import { fantasyName, companyName, cnpj } from '@utils/validationSchemas/company';
import { email } from '@utils/validationSchemas/contacts';
import { firstName, surname, cpf, role } from '@utils/validationSchemas/people';

export type CompanyFormValues = ICompany['info'] & ICompany['owner'] & ICompany['address']

export const head = {
  description: 'Bem-vindo(a) à página de informações da empresa! Aqui, você pode inserir as informações da sua empresa em nosso sistema, incluindo informações de contato, endereço, descrição do negócio e outras informações. Além disso, nossa plataforma segura garante que todas as informações inseridas sejam mantidas confidenciais e protegidas. Adicionar informações da empresa nunca foi tão fácil e seguro! Experimente agora e torne sua gestão de negócios mais eficiente.'
};

export const getFormInitialValues = (companyValues: ICompany | null) => ({
  fantasyName: companyValues?.info?.fantasyName || '',
  companyName: companyValues?.info?.companyName || '',
  cnpj: companyValues?.info?.cnpj || '',
  email: companyValues?.info?.email || '',
  zipCode: companyValues?.address?.zipCode || '',
  address: companyValues?.address?.address || '',
  district: companyValues?.address?.district || '',
  locationNumber: companyValues?.address?.locationNumber || '',
  city: companyValues?.address?.city || '',
  state: companyValues?.address?.state || '',
  firstName: companyValues?.owner?.firstName || '',
  surname: companyValues?.owner?.surname || '',
  cpf: companyValues?.owner?.cpf || '',
  role: companyValues?.owner?.role || ''
});

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
