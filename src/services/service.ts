import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => ({
    ...config,
    baseURL: process.env.API_BASE_URL,
    data: config.data as string,
    headers: {
      'x-api-key': process.env.API_KEY,
      'accept': 'application/json',
    }
  })
function service(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest)
  return axiosInstance
}

const instance = axios.create()

export default service(instance)