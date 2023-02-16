interface ICompany {
  _id: string;
  token: string;
  cnpj: string;
  fantasyName: string;
  corporateName: string;
  email: string;
  password: string;
  confirmPassword: ICompany['password'];
  address: {
    zipCode: string;
    street: string;
    district: string;
    complement: string;
    location: string;
    state: string;
  },
  accountCreatedAt: Date;
}

export default ICompany;
