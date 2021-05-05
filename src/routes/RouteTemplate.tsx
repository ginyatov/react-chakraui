import React, { useContext } from 'react'
import { RouteProperties } from '@routes/interfaces'
import LayoutPageProperties from '@templates/interfaces/LayoutPageProperties'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { isPrivate, isSession, RouteTypeEnum } from '@routes/routeTypes'
import { Store } from '@store/store'
import { GlobalLayout } from '@templates/index'
import { Error403 } from '@templates/errors'

interface RouteTemplateProperties<T = React.ReactNode> {
  appRoute: RouteProperties
  Template: React.SFC<LayoutPageProperties>
  route: RouteComponentProps<T>
  type: RouteTypeEnum
}

const RouteTemplate = ({
  appRoute,
  Template,
  route,
  type,
}: RouteTemplateProperties) => {
  const { auth } = useContext(Store)

  if (isPrivate(type) && !auth.isAuth) {
    return <GlobalLayout Component={Error403} route={route} />
  }

  if (isSession(type) && auth.isAuth) {
    return <Redirect to="/" />
  }

  const Layout = appRoute.template ? appRoute.template : Template

  return <Layout Component={appRoute.component} route={route} />
}

export default RouteTemplate
