import type { IAuthContext } from '@ts/interfaces';

export interface IState {
  company: IAuthContext['company'];
}

export interface IActions {
  handlePersistCompanyData: (company: IAuthContext['company']) => void;
  handleCleanCompanyData: () => void;
}
