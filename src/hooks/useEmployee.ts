import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import type { IParams, ICompany, IEmployee } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/error';
import { success } from '@utils/success';

type EmployeeRegisterValues = Omit<IEmployee, '_id' | 'token'>;
type EmployeeUpdateValues = Omit<EmployeeRegisterValues, 'company' | 'security'>;

type ResponseEmployeeById = { employee: IEmployee; company: ICompany } | undefined;
type ResponseAllEmployees = { employees: IEmployee[]; totalCount: number } | undefined;

const useEmployee = () => {
  const ENDPOINT = '/employee';

  const handleRegisterEmployee = useCallback(async (employeeValues: EmployeeRegisterValues) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/register`;

    try {
      const response = await axiosInstance.post(FORMATTED_ENDPOINT, employeeValues);
      success(response);
    } catch (e) {
      catchError(e);
    }
  }, []);

  const handleUpdateEmployeeById = useCallback(async (employeeId: IEmployee['_id'], employeeValues: EmployeeUpdateValues) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/update-by-id/${employeeId}`;

    try {
      const response = await axiosInstance.patch(FORMATTED_ENDPOINT, employeeValues);
      success(response);
    } catch (e) {
      catchError(e);
    }
  }, []);

  const handleGetEmployeeById = useCallback((employeeId: IEmployee['_id']) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/get-by-id/${employeeId}`;

    return useQuery(
      ['employee-by-id', employeeId],
      async (): Promise<ResponseEmployeeById> => {
        try {
          const { data }: AxiosResponse<ResponseEmployeeById> = await axiosInstance.get(FORMATTED_ENDPOINT);
          return data;
        } catch (e) {
          catchError(e);
        }
      }
    );
  }, []);

  const handleGetAllEmployees = useCallback((companyCNPJ: string, { page, limit, name }: IParams) => {
    const PARAMS = `?page=${page}&limit=${limit}&name=${name}`;
    const FORMATTED_ENDPOINT = `${ENDPOINT}/get-all/${companyCNPJ}${PARAMS}`;

    return useQuery(
      ['all-employees', page, limit, name],
      async (): Promise<ResponseAllEmployees> => {
        try {
          const { data }: AxiosResponse<ResponseAllEmployees> = await axiosInstance.get(FORMATTED_ENDPOINT);
          return data;
        } catch (e) {
          catchError(e);
        }
      },
      {
        keepPreviousData: true
      }
    );
  }, []);

  return {
    handleRegisterEmployee,
    handleUpdateEmployeeById,
    handleGetEmployeeById,
    handleGetAllEmployees
  };
};

export default useEmployee;
