import { IEnv } from "~/src/types/app/IEnv"

export function checkMissingEnv(env: IEnv): boolean {
  return !Object.entries(env).every(([, value]) => value !== '')
}

export default checkMissingEnv