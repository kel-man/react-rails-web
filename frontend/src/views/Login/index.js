import React, { useState } from 'react'
import { Button, CssBaseline, Container, TextField, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import styles from '../../components/styles'

const Login = ({classes, history}) => {
  const [ values, setValues ] = useState({
    email: '',
    password: '',
  })

  const inputChange = e => {
    const { name, value } = e.targe
    setValues({...values, [name]: value})
  }

  const onSubmit = e => {
    e.preventDefault()
    const data = {...values}
    data.password_confirmation = values.password
    history.push('/')
    }

  return(
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography>
          Log-in
        </Typography>
        <form onSubmit={onSubmit} className={classes.form}>
          <TextField
            className={classes.textField}
            name="email"
            onChange={inputChange}
            label="Email"
          />
          <TextField
            className={classes.textField}
            name="password"
            type='password'
            onChange={inputChange}
            label="Password"
          />
          <Button variant='contained' type="submit">Submit</Button>
        </form>
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(Login))
