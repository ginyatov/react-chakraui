import { Route, Switch } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import { RouteTemplateProperties } from '@routes/interfaces'
import { RouteTypeEnum } from '@routes/routeTypes'

import privateRoutes from './private'
import publicRoutes from './public'
import sessionRoutes from './session'
import { AuthLayout, GlobalLayout } from '@templates/index'
import RouteTemplate from '@routes/RouteTemplate'
import { Error404 } from '@templates/errors'

const Auth = lazy(() => import('@pages/Auth'))
const Main = lazy(() => import('@pages/Main'))

const routesTemplates: RouteTemplateProperties[] = [
  {
    routes: publicRoutes,
    template: GlobalLayout,
    type: RouteTypeEnum.public,
  },
  {
    routes: privateRoutes,
    template: GlobalLayout,
    type: RouteTypeEnum.private,
  },
  {
    routes: sessionRoutes,
    template: AuthLayout,
    type: RouteTypeEnum.session,
  },
]

export default function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routesTemplates.map((routesTemplate) => {
          const { routes: appRoutes, template: Template, type } = routesTemplate
          return appRoutes.map((appRoute) => (
            <Route
              exact={appRoute.exact}
              path={appRoute.path}
              key={appRoute.path}
              render={(route) => (
                <RouteTemplate
                  appRoute={appRoute}
                  Template={Template}
                  route={route}
                  type={type}
                />
              )}
            />
          ))
        })}
        <Route
          render={(route) => (
            <GlobalLayout Component={Error404} route={route} />
          )}
        />
      </Switch>
    </Suspense>
  )
}
