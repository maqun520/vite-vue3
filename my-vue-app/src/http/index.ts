import instance from "./axios";
import {AxiosRequest} from '/#/axios'

const axios = ({
  method,
  url,
  data,
  config
}: AxiosRequest) => {
  if (method == 'POST') {
      return instance.post(url, data, {...config})
  } else if (method == 'GET') {
      return instance.get(url, {
          params: data,
          ...config
      })
  } else if (method == 'DELETE') {
      return instance.delete(url, {
          params: data,
          ...config
      }, )
  } else if (method == 'PUT') {
      return instance.put(url, data,{...config})
  } else {
      console.error('未知的method' + method)
      return false
  }
}
export default axios