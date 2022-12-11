import { AxiosError as AxiosErrorGenerics } from 'axios'

export enum ErrorType {
  Axios = 'axios-error',
  Stock = 'stock-error'
}

export interface IErrorBase<T> {
  error: Error | AxiosErrorGenerics<T>;
  type: ErrorType;
}

export interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosErrorGenerics<T>;
  type: ErrorType.Axios;
}

export interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: ErrorType.Stock;
}

export enum ServerErrorCode {
  "Bad Request." = 400,
  "You do not have the required permissions to make this request." = 403,
  "You have requested a resource that does not exist." = 404,
  "You've exceeded your limit for your API key." = 429,
  "Internal Server Error." = 500,
}