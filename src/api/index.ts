import axios from 'axios'
import { RegisterAuthDto } from './fetchers'

type props = {
  breakpoint: string
  method?: 'get' | 'post' | 'put' | 'delete'
  data?: any
  params?: any
  config?: any
  token?: string
}

const mainApi = ({
  method = 'get',
  breakpoint,
  data,
  params,
  token,
}: props) => {
  return axios({
    method,
    url: `${process.env.API_PORT}${breakpoint}`,
    data,
    ...(params && { params }),
    ...(token && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  })
}

const api = {
  auth: {
    registration: (data: RegisterAuthDto) =>
      mainApi({
        breakpoint: '/auth/registration',
        method: 'post',
        data,
      }),
  },

  users: {
    getAll: () => mainApi({ breakpoint: '/users' }),
  },
}

export default api
