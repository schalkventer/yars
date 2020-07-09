import { AxiosResponse } from 'axios';

export interface Data {
  example: true;
  id: string;
}

export type ServerResponse = Partial<AxiosResponse<Data>>;
