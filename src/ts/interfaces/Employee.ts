import type { IAddress } from '@ts/interfaces';

interface IEmployee {
  _id: string;
  cpf: string;
  firstName: string;
  surname: string;
  socialName: string;
  dateOfBirth: Date;
  password: string;
  responsibleCnpj: string;
  address: IAddress;
  accountCreatedAt?: Date;
}

export default IEmployee;
