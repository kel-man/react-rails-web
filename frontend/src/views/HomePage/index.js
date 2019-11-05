import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Container, Typography, CssBaseline } from '@material-ui/core'
import NavBar from '../../components/NavBar'
const HomePage = ({history}) => {
  return (
    <>
      <CssBaseline/>
      <NavBar />
      <Container maxWidth='sm'>
        <Typography>This is our homepage</Typography>
        <Button variant='outlined' onClick={()=>history.push("_/signup")}>Sign Up</Button>
      </Container>
    </>
  )
}

export default withRouter(HomePage)
