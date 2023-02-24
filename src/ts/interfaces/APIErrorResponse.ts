import type { IAPIError } from '@ts/interfaces';

interface IAPIErrorResponse {
  status: number;
  body: IAPIError;
}

export default IAPIErrorResponse;
