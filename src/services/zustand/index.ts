import { create } from 'zustand';

import { persist, type PersistOptions } from 'zustand/middleware';

import type { IState, IActions } from '@ts/interfaces';

import { COMPANY_KEY } from '@constants/storage';

const initialState: IState = {
  company: null
};

const persistOptions: PersistOptions<IState & IActions> = {
  name: COMPANY_KEY,
  version: 1
};

const useCompanyStore = create<IState & IActions>()(
  persist(
    (set) => ({
      ...initialState,
      handlePersistCompanyData: (company) => set({ company: company }),
      handleCleanCompanyData: () => set(initialState)
    }),
    persistOptions
  )
);

export default useCompanyStore;
