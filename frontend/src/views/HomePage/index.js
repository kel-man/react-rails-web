import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Container, Typography, CssBaseline } from '@material-ui/core'
const HomePage = ({history}) => {
  return (
    <>
      <CssBaseline/>
      <Container maxWidth='sm'>
        <Typography>This is our homepage</Typography>
      </Container>
    </>
  )
}

export default withRouter(HomePage)
