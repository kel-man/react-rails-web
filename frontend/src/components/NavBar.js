import React, { useContext } from 'react'
import AuthContext from '../AuthContext'
import { Box, Button, CssBaseline } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'row',
    background: 'linear-gradient(to right, #66bb6a, #004d40)',
    justifyContent: 'flex-end',
  },
})

const NavBar = ({ classes, history }) => {
  const authContext = useContext(AuthContext)

  const logout = () => {
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      url: '/users/sign_out',
    }).then(() => (window.location = '/'))
  }

  return (
    <>
      <CssBaseline />
      <Box className={classes.container}>
        <Button color="inherit" edge="start" onClick={() => history.push('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => history.push('/_/plots')}>
          Plots
        </Button>
        <Button color="inherit" onClick={() => history.push('/_/pricing')}>
          Pricing
        </Button>
        <Button color="inherit" onClick={() => history.push('/_/Whiteboard')}>
          Whiteboard
        </Button>
        <Button color="inherit" onClick={() => history.push('/_/FAQ')}>
          F.A.Q.
        </Button>
        {!authContext.loggedIn && (
          <>
            <Button color="inherit" onClick={() => history.push('/_/signup')}>
              Sign Up
            </Button>
            <Button color="inherit" edge="end" variant="outlined" onClick={() => history.push('/_/login')}>
              Log-in
            </Button>
          </>
        )}
        {authContext.loggedIn && (
          <>
            <Button color="inherit" onClick={logout}>
              Log Out
            </Button>
          </>
        )}
      </Box>
    </>
  )
}

export default withStyles(styles)(withRouter(NavBar))
