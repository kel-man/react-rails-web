import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'row',
    backgroundColor: green[400],

  }
})
const NavBar = ({classes, history}) => {
  return(
    <>
      <Box className={classes.container}>
        <Button color='inherit' edge='start'  onClick={()=>history.push("/")}>Home</Button>
        <Button color='inherit'  onClick={()=>history.push("/_/signup")}>Sign Up</Button>
        <Button color='inherit'  onClick={()=>history.push("/_/FAQ")}>F.A.Q.</Button>
        <Button color='inherit' edge='end'  onClick={()=>history.push("/_/login")}>Log-in</Button>
      </Box>
    </>
  )
}

export default withStyles(styles)(withRouter(NavBar))
