import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const NavBar = ({history}) => {
  return(
    <>
      <Box>
        <Button color='inherit' edge='start' variant='outlined' onClick={()=>history.push("/")}>Home</Button>
        <Button color='inherit' variant='outlined' onClick={()=>history.push("/_/signup")}>Sign Up</Button>
        <Button color='inherit' variant='outlined' onClick={()=>history.push("/_/FAQ")}>F.A.Q.</Button>
        <Button color='inherit' edge='end' variant='outlined' onClick={()=>history.push("/_/login")}>Log-in</Button>
      </Box>
    </>
  )
}

export default withRouter(NavBar)
