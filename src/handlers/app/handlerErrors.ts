import axios, { AxiosError as AxiosErrorGenerics } from 'axios'
import { ErrorType, IAxiosError, IStockError } from '~/src/types/app/IErrors'

/**
 * I created some middleware based on this structure to make the code a bit cleaner in the eventual request
 *
 * @param callback {(err: IAxiosError<T> | IStockError<T>)}
 * @return {(error: (Error | AxiosErrorGenerics<T>)) => void}
 */
export default function handlerErrors<T>(callback: (err: IAxiosError<T> | IStockError<T>) => void) {
  return (error: Error | AxiosErrorGenerics<T>): void => {
    if (axios.isAxiosError(error)) {
      callback({
        error,
        type: ErrorType.Axios,
      })
    } else {
      callback({
        error,
        type: ErrorType.Stock,
      })
    }
  }
}
