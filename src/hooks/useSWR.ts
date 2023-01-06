import SWR, { SWRConfiguration } from 'swr';

import axiosInstance from '@services/axios';

const defaultConfig: SWRConfiguration = {
  fetcher: async (url) => {
    const { data } = await axiosInstance.get(url);
    return data;
  },
  errorRetryCount: 1,
};

const useSWR = (url: string) => {
  const { data, isLoading, error } = SWR(url, defaultConfig);

  return { data, isLoading, error };
};

export default useSWR;
