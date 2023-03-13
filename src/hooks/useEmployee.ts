import { useCallback } from 'react';

import type { AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import type { IParams, ICompany, IEmployee } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/error';
import { success } from '@utils/success';

const useEmployee = () => {
  const ENDPOINT = '/employee';

  type ResponseEmployeeById = { employee: IEmployee; company: ICompany } | undefined
  type ResponseAllEmployees = { employees: IEmployee[]; totalCount: number } | undefined

  const handleRegisterEmployee = useCallback(async (employeeValues: Omit<IEmployee, '_id' | 'token'>) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/register`;

    try {
      const response = await axiosInstance.post(FORMATTED_ENDPOINT, employeeValues);
      success(response);
    } catch (e) {
      catchError(e);
    }
  }, []);

  const handleGetEmployeeById = useCallback((employeeId: string) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/get-by-id/${employeeId}`;

    return useQuery(
      ['employeeById', employeeId],
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

  const handleGetAllEmployees = useCallback(({ page, limit, name }: IParams) => {
    const PARAMS = `?page=${page}&limit=${limit}&name=${name}`;
    const FORMATTED_ENDPOINT = `${ENDPOINT}/get-all${PARAMS}`;

    return useQuery(
      ['allEmployees', page, limit, name],
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
    handleGetEmployeeById,
    handleGetAllEmployees
  };
};

export default useEmployee;
