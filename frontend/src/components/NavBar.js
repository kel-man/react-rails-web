import React from 'react'
import { Box, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'row',
    background: 'linear-gradient(to right, #66bb6a, #004d40)',
    justifyContent: 'flex-end',
  },
})
const NavBar = ({classes, history}) => {
  return(
    <>
      <Box className={classes.container}>
        <Button color='inherit' edge='start'  onClick={()=>history.push("/")}>Home</Button>
        <Button color='inherit' onClick={()=>history.push("/_/plots")}>Plots</Button>
        <Button color='inherit'  onClick={()=>history.push("/_/signup")}>Sign Up</Button>
        <Button color='inherit'  onClick={()=>history.push("/_/FAQ")}>F.A.Q.</Button>
        <Button color='inherit' edge='end'  onClick={()=>history.push("/_/login")}>Log-in</Button>
      </Box>
    </>
  )
}

export default withStyles(styles)(withRouter(NavBar))
