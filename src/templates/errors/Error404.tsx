import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import Exception from './Exception'
import './index.scss'

export default function Error403() {
  const actions = (
    <div>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )

  return (
    <div className="content-width page-error">
      <Exception
        type="404"
        title="We're Sorry!"
        desc="We can’t find the page you were trying to reach"
        actions={actions}
      />
    </div>
  )
}
