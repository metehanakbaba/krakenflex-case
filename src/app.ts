import handlerUpdatedOutages from '~/src/handlers/services/handlerUpdatedOutages'
import checkMissingEnv from '~/src/utils/checkMissingEnv'
import handler from '~/src/handlers/handler'
import env from '~/src/env'


(async (): Promise<boolean> => {

  if (!checkMissingEnv(env)) {
    console.error('[!] Missing env properties')
    return false
  }

  handler(
    handlerUpdatedOutages('norwich-pear-tree')
  )
  return true
})()
