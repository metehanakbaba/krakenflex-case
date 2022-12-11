import * as dotenv from 'dotenv'
import {IEnv} from "~/src/types/app/IEnv"

dotenv.config()

const env: IEnv = {
  API_BASE_URL : process.env.API_BASE_URL || 'https://api.krakenflex.systems/interview-tests-mock-api/v1',
  API_KEY: process.env.API_KEY || ''
}

export default env