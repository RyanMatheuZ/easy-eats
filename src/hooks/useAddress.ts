import { useState, useCallback } from 'react';

import { type AxiosResponse } from 'axios';

import axiosInstance from '@services/axios';

import { showToast } from '@utils/toast';

interface AddressResponse {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  numeroDoLocal?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  erro?: string;
}

const useCEP = () => {
  const [isLoadingAddress, setIsLoadingAddress] = useState<boolean>();

  const handleGetAdress = useCallback(async (cep: string) => {
    const ENDPOINT = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      setIsLoadingAddress(true);

      const { data }: AxiosResponse<AddressResponse> = await axiosInstance.get(ENDPOINT);

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
