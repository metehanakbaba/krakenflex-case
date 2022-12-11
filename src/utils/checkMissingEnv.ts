import { IEnv } from "~/src/types/app/IEnv"

export default function checkMissingEnv(env: IEnv): boolean {
  return Object.entries(env).every(([, value]) => value !== '')
}