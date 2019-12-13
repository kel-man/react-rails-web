import React, { useState } from 'react'
import { Container, CssBaseline, Typography } from '@material-ui/core'
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
})

const Whiteboard = ({ history }) => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography>Your Board</Typography>
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(Whiteboard))
