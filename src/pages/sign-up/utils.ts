import * as Yup from 'yup';

import { fantasyName, cnpj, email, password } from '@utils/schemas';

export interface SignUpValues {
  fantasyName: string;
  cnpj: string;
  email: string;
  password: string;
}

export const signUpInitialValues: SignUpValues = {
  fantasyName: '',
  cnpj: '',
  email: '',
  password: ''
};

export const signUpSchema = Yup.object().shape({
  fantasyName,
  cnpj,
  email,
  password
});
