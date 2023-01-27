import * as Yup from 'yup';

import { fantasyName, cnpj, email, password, confirmPassword } from '@utils/schemas';

export interface SignUpValues {
  fantasyName: string;
  cnpj: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signUpInitialValues: SignUpValues = {
  fantasyName: '',
  cnpj: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const signUpSchema = Yup.object().shape({
  fantasyName,
  cnpj,
  email,
  password,
  confirmPassword
});
