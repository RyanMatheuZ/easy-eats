import { useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import type { ICompany } from '@ts/interfaces';

import axiosInstance from '@services/axios';
import useCompanyStore from '@services/zustand';

import { catchError } from '@utils/error';
import { success } from '@utils/success';

type CompanyValues = Omit<ICompany, '_id' | 'token' | 'rating' | 'security'>

const useCompany = () => {
  const ENDPOINT = '/company';

  const { handlePersistCompanyData } = useCompanyStore();

  const handleUpdateCompanyById = useCallback(async (companyId: string, companyValues: CompanyValues) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/update-by-id/${companyId}`;

    try {
      const response: AxiosResponse<{ company: ICompany }> = await axiosInstance.patch(FORMATTED_ENDPOINT, companyValues);
      handlePersistCompanyData(response.data.company);
      success(response);
    } catch (e) {
      catchError(e);
    }
  }, []);

  return {
    handleUpdateCompanyById
  };
};

export default useCompany;
