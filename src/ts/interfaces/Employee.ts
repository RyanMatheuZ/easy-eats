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
  confirmPassword: string;
  responsibleCnpj: string;
  address: IAddress;
  accountCreatedAt?: Date;
}

export interface IEmployeeForm {
  cpf: IEmployee['firstName'];
  firstName: IEmployee['firstName'];
  surname: IEmployee['surname'];
  socialName: IEmployee['socialName'];
  email: IEmployee['email'];
  cellPhone: IEmployee['cellPhone'];
  dateOfBirth: IEmployee['dateOfBirth'];
  role: IEmployee['role'];
  password: IEmployee['password'];
  confirmPassword: IEmployee['confirmPassword'];
  zipCode: IAddress['cep'];
  address: IAddress['logradouro'];
  district: IAddress['bairro'];
  locationNumber: IAddress['numeroDoLocal'];
  city: IAddress['localidade'];
  state: IAddress['uf'];
}
