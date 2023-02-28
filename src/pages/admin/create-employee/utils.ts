import * as Yup from 'yup';

import type { IEmployee } from '@ts/interfaces';

export const employeeInitialValues: Pick<IEmployee, 'cpf' | 'firstName' | 'surname' | 'socialName' | 'dateOfBirth'> = {
  cpf: '',
  firstName: '',
  surname: '',
  socialName: '',
  dateOfBirth: new Date()
};

export const createEmployeeSchema = Yup.object().shape({

});
