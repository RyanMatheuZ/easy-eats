import * as Yup from 'yup';

import { isToday, isFuture, isBefore, isAfter } from 'date-fns';

import { validateCPF } from '@utils/inputs/cpf';

const schemas = {
  firstName: Yup
    .string()
    .min(3, 'O nome deve ter no mínimo 3 caracteres!')
    .required('Você deve inserir um nome!'),
  surname: Yup
    .string()
    .min(3, 'O sobrenome deve ter no mínimo 3 caracteres!')
    .required('Você deve inserir um sobrenome!'),
  gender: Yup
    .string()
    .required('Você deve inserir o gênero!'),
  socialName: Yup
    .string()
    .optional()
    .min(3, 'O nome social deve ter no mínimo 3 caracteres!'),
  cpf: Yup
    .string()
    .required('Você deve inserir um CPF!')
    .test(
      'isValidCPF',
      'Esse CPF não é válido!',
      (value) => validateCPF(String(value))
    ),
  dateOfBirth: Yup
    .date()
    .required('Você deve inserir a data de nascimento!')
    .test(
      'isValidDateOfBirth',
      'A data de nascimento não pode ser uma data futura!',
      (value) => !(isToday(value as Date) || isFuture(value as Date))
    )
    .typeError('Você deve inserir uma data válida!'),
  admissionDate: Yup
    .date()
    .required('Você deve inserir a data de admissão!')
    .test(
      'isValidAdmissionDate',
      'A data de admissão não pode ser uma data futura!',
      (value) => !isFuture(value as Date)
    )
    .test(
      'isBeforeResignationDate',
      'A data de admissão deve ser anterior à data de demissão!',
      // anonymous function to access the "this" property
      function (value) {
        if (this.parent.resignationDate) {
          return isBefore(value as Date, this.parent.resignationDate as Date);
        }
        return true;
      }
    )
    .typeError('Você deve inserir uma data válida!'),
  resignationDate: Yup
    .date()
    .optional()
    .test(
      'isValidDateOfBirth',
      'A data de demissão não pode ser uma data futura!',
      (value) => !isFuture(value as Date)
    )
    .test(
      'isAfterAdmissionDate',
      'A data de demissão deve ser posterior à data de admissão!',
      // anonymous function to access the "this" property
      function (value) {
        if (value) {
          return isAfter(value as Date, this.parent.admissionDate as Date);
        }
        return true;
      }
    )
    .typeError('Você deve inserir uma data válida!'),
  role: Yup
    .string()
    .min(3, 'O cargo/função deve ter no mínimo 3 caracteres!')
    .required('Você deve inserir o cargo/função!'),
  salary: Yup
    .string()
    .required('Você deve inserir um salário!')
    .test(
      'isValidSalary',
      'Você deve inserir um salário válido!',
      (value) => Number(value) !== 0
    )
};

export const {
  firstName,
  surname,
  gender,
  socialName,
  cpf,
  dateOfBirth,
  admissionDate,
  resignationDate,
  role,
  salary
} = schemas;
