import { useCallback } from 'react';

import type { AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import type { IEmployee, IRegisterEmployee, IParams } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/error';
import { success } from '@utils/success';

const useEmployee = () => {
  const ENDPOINT = '/employee';

  const handleRegisterEmployee = useCallback(async (employeeValues: IRegisterEmployee & { responsibleCnpj: string }) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/register`;

    try {
      const response = await axiosInstance.post(FORMATTED_ENDPOINT, employeeValues);
      success(response);
    } catch (e) {
      catchError(e);
    }
  }, []);

  const handleGetEmployeeById = (employeeId: number) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/get-by-id/${employeeId}`;

    return useQuery(
      ['employeeById'],
      async (): Promise<IEmployee | undefined> => {
        try {
          const { data }: AxiosResponse<{ employee: IEmployee }> = await axiosInstance.get(FORMATTED_ENDPOINT);
          return data.employee;
        } catch (e) {
          catchError(e);
        }
      }
    );
  };

  const handleGetAllEmployees = ({ page, limit, name }: IParams) => {
    const PARAMS = `?page=${page}&limit=${limit}&name=${name}`;
    const FORMATTED_ENDPOINT = `${ENDPOINT}/get-all${PARAMS}`;

    return useQuery(
      ['allEmployees', page, limit, name],
      async (): Promise<{ employess: IEmployee[]; totalCount: number } | undefined> => {
        try {
          const { data }: AxiosResponse<{ employess: IEmployee[]; totalCount: number }> = await axiosInstance.get(FORMATTED_ENDPOINT);
          return data;
        } catch (e) {
          catchError(e);
        }
      },
      {
        keepPreviousData: true
      }
    );
  };

  return {
    handleRegisterEmployee,
    handleGetEmployeeById,
    handleGetAllEmployees
  };
};

export default useEmployee;
