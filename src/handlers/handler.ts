import { handlerErrors } from '~/src/handlers/app/handlerErrors'
import { ErrorType, ServerErrorCode } from '~/src/types/app/IErrors'

/**
 * This Handler function that handles errors at app and service level and provides efficient validation
 *
 * @param callback {Promise<void>[]} Multiple site ids can be sent somehow in the iterator
 */
export default function handler(...callback: Promise<boolean>[]): void {
  return callback.forEach(_ => {
    _.catch(
      handlerErrors(e => {
        switch (e.type) {
          case ErrorType.Axios:
            console.table({
              endpoint: e.error.request.path,
              status: e.error.response?.status,
              message: ServerErrorCode[e.error.response?.status as number]
            })
            break
          case ErrorType.Stock:
            console.error(e)
            break
          default:
            console.error(e)
            break
        }
      })
    )
  })
}
