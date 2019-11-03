import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const HomePage = ({history}) => {
  return (
    <div>
      <p>This is our homepage</p>
      <Button variant='outlined' onClick={()=>history.push("_/signup")}>Sign Up</Button>
    </div>
  )
}

export default withRouter(HomePage)
