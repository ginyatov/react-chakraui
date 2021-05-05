import Index from '@pages/Index'
import { RouteProperties } from './interfaces'
import { ROUTES_PATH } from './RoutesPath'

const routes: RouteProperties[] = [
  {
    component: Index,
    exact: true,
    path: ROUTES_PATH.main,
  },
]

export default routes
