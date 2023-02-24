import { useState, useCallback } from 'react';

import type { IAddress } from '@ts/interfaces';

import type { AxiosResponse } from 'axios';

import axiosInstance from '@services/axios';

import { showToast } from '@utils/toast';

const useCEP = () => {
  const [address, setAddress] = useState<IAddress>();
  const [isLoadingAddress, setIsLoadingAddress] = useState<boolean>();

  const getAdress = useCallback(async (cep: IAddress['cep']) => {
    if (cep.length < 8) {
      return;
    }

    const ENDPOINT = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      setIsLoadingAddress(true);

      const { data }: AxiosResponse<IAddress> = await axiosInstance.get(ENDPOINT);

      if (data.erro) {
        return showToast('CEP inválido. Tente Novamente!', 'error');
      }

      setAddress(data);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoadingAddress(false);
    }
  }, []);

  return {
    address,
    isLoadingAddress,
    getAdress
  };
};

export default useCEP;
