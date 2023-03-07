import { useCallback } from 'react';

import type { AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import type { IEmployee, IRegisterEmployee } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/error';
import { success } from '@utils/success';

const useEmployee = () => {
  const ENDPOINT = '/employee';

  const handleRegisterEmployee = useCallback(async (employeeValues: IRegisterEmployee & { responsibleCnpj: string }) => {
    try {
      const response = await axiosInstance.post(`${ENDPOINT}/register`, employeeValues);
      success(response);
    } catch (e) {
      catchError(e);
    }
  }, []);

  const queryGetEmployeeById = async (employeeId: number) => {
    try {
      const response: AxiosResponse<IEmployee> = await axiosInstance.get(`${ENDPOINT}/get-by-id/${employeeId}`);
      success(response);
      return response.data;
    } catch (e) {
      catchError(e);
    }
  };
  const handleGetEmployeeById = (employeeId: number) => {
    return useQuery<IEmployee | undefined>({
      queryKey: ['employeeById', employeeId],
      queryFn: () => queryGetEmployeeById(employeeId)
    });
  };

  const queryGetAllEmployees = async () => {
    try {
      const response: AxiosResponse<IEmployee[]> = await axiosInstance.get(`${ENDPOINT}/get-all`);
      success(response);
      return response.data;
    } catch (e) {
      catchError(e);
    }
  };
  const handleGetAllEmployees = () => {
    return useQuery<IEmployee[] | undefined>({
      queryKey: ['allEmployees'],
      queryFn: () => queryGetAllEmployees()
    });
  };

  return {
    handleRegisterEmployee,
    handleGetEmployeeById,
    handleGetAllEmployees
  };
};

export default useEmployee;
