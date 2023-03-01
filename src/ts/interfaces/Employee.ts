import type { IAddress } from '@ts/interfaces';

export interface IEmployee {
  _id: string;
  cpf: string;
  firstName: string;
  surname: string;
  socialName: string;
  email: string;
  cellPhone: string;
  dateOfBirth: Date;
  role: string;
  password: string;
  responsibleCnpj: string;
  address: IAddress;
  accountCreatedAt?: Date;
}

export interface IRegisterEmployee {
  cpf: IEmployee['firstName'];
  firstName: IEmployee['firstName'];
  surname: IEmployee['surname'];
  socialName: IEmployee['socialName'];
  email: IEmployee['email'];
  cellPhone: IEmployee['cellPhone'];
  dateOfBirth: IEmployee['dateOfBirth'];
  role: IEmployee['role'];
  zipCode: IAddress['cep'];
  address: IAddress['logradouro'];
  district: IAddress['bairro'];
  city: IAddress['localidade'];
  state: IAddress['uf'];
}
