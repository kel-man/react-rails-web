import React from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

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

const Plots = ({classes, history}) => {
  return(<>
    <CssBaseline />
    <Typography>Plots page</Typography>
  </>
  )
}

export default withStyles(styles)(withRouter(Plots))
