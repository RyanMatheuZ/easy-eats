import { useState, useCallback } from 'react';

import type { IAddress } from '@ts/interfaces';

import type { AxiosResponse } from 'axios';

import axiosInstance from '@services/axios';

import { showToast } from '@utils/toast';

const useCEP = () => {
  const [isLoadingAddress, setIsLoadingAddress] = useState<boolean>();

  const handleGetAdress = useCallback(async (cep: IAddress['cep']) => {
    const ENDPOINT = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      setIsLoadingAddress(true);

      const { data }: AxiosResponse<IAddress> = await axiosInstance.get(ENDPOINT);

      if (data.erro) {
        showToast('CEP inválido. Tente Novamente!', 'error');
      }

      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingAddress(false);
    }
  }, []);

  return {
    handleGetAdress,
    isLoadingAddress
  };
};

export default useCEP;
