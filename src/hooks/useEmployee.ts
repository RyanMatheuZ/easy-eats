import { useState, useCallback } from 'react';

import type { AxiosResponse } from 'axios';

import type { IEmployee, IRegisterEmployee } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { showToast } from '@utils/toast';

const useEmployee = () => {
  const [employee, setEmployee] = useState<IEmployee>();
  const [allEmployees, setAllEmployees] = useState<IEmployee[]>();

  const ENDPOINT = '/employee';

  const handleRegisterEmployee = useCallback(async (employeeValues: IRegisterEmployee & { responsibleCnpj: string }) => {
    try {
      await axiosInstance.post(`${ENDPOINT}/register`, employeeValues);
    } catch {
      showToast('Não foi possível salvar os dados do colaborador, Tente novamente mais tarde!', 'error');
    }
  }, []);

  const handleGetEmployeeById = useCallback(async (employeeId: number) => {
    try {
      const { data }: AxiosResponse<IEmployee> = await axiosInstance.get(`${ENDPOINT}/get-by-id/${employeeId}`);
      setEmployee(data);
    } catch {
      showToast('Não foi possível obter os dados do colaborador, Tente novamente mais tarde!', 'error');
    }
  }, []);

  const handleGetAllEmployees = useCallback(async () => {
    try {
      const { data }: AxiosResponse<IEmployee[]> = await axiosInstance.get(`${ENDPOINT}/get-all`);
      setAllEmployees(data);
    } catch {
      showToast('Não foi possível obter os dados dos colaboradores, Tente novamente mais tarde!', 'error');
    }
  }, []);

  return {
    handleRegisterEmployee,
    handleGetEmployeeById,
    handleGetAllEmployees,
    employee,
    allEmployees
  };
};

export default useEmployee;
