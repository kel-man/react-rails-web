import React, { useState, useEffect } from 'react'
import {
  Button,
  Container,
  CssBaseline,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  TextField,
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'

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

const Checklist = ({ history }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios({
      headers: {
        contentType: 'application/json',
      },
      method: 'GET',
      url: '/items',
    })
      .then(response => {
        console.log('response: ', response)
        setItems(response.data.items)
      })
      .catch(error => {})
  }, [])

  const inputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault()
    const data = { ...values }
    axios({
      headers: {
        contentType: 'application/json',
      },
      method: 'POST',
      url: '/listItems',
      data: {
        item: data,
      },
    })
      .then(response => {})
      .catch(error => {})
  }

  return (
    <>
      <CssBaseline />
      <Container>
        <Typography>Checklist</Typography>
        {items.map(item => (
          <li key={item.id}>
            {item.topic}:{item.contents}
          </li>
        ))}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(Checklist))
