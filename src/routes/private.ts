import Profile from '@pages/Profile'

import { RouteProperties } from './interfaces'
import { ROUTES_PATH } from './RoutesPath'

const routes: RouteProperties[] = [
  {
    component: Profile,
    exact: true,
    path: ROUTES_PATH.profile,
  },
]

export default routes
