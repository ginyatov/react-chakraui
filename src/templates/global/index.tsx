import React from 'react'

import LayoutPageProperties from '@templates/interfaces/LayoutPageProperties'

const GlobalLayout = ({ Component, route }: LayoutPageProperties) => (
  <div className="public-layout">
    <div className="content-page">
      <div className="content-width breadcrumbs" />
      <Component route={route} />
    </div>
  </div>
)

export default GlobalLayout
