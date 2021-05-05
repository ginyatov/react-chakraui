import { Login, Registration } from '@pages/Auth/index'
import { RouteProperties } from './interfaces'
import { ROUTES_PATH } from '@routes/RoutesPath'

const routes: RouteProperties[] = [
  {
    component: Login,
    exact: true,
    path: ROUTES_PATH.login,
  },
  {
    component: Registration,
    exact: true,
    path: ROUTES_PATH.registration,
  },
]

export default routes
