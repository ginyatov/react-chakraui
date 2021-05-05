import React from 'react'
import config from './config'
import './index.scss'

export default function Exception({ type, title, desc, actions }) {
  return (
    <div>
      <div>
        <img src={config[type].img} alt={config[type].title} />
      </div>
      <div>
        <h1>{title || config[type].title}</h1>
        <div className="exception-page-desc">{desc || config[type].desc}</div>
        <div>{actions}</div>
      </div>
    </div>
  )
}
