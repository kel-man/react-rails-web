import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Container, Typography, CssBaseline } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  form: {
    display: 'flex',
    flexFlow: 'column',
    maxWidth: '500px',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: theme.ash,
  },
  container: {
    display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column',
  },
  textField: {
    marginBottom: '20px',
  },
})

const HomePage = ({history}) => {
  return (
    <>
      <CssBaseline/>
      <Container maxWidth='sm' >
        <Typography>More Text for now</Typography>
        <Typography>This is our homepage</Typography>
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(HomePage))
