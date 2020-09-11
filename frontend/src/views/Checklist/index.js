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
  const [newItem, setNewItem] = useState([])

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

  const changeTopic = e => {
    const { key, value } = e.target
    setNewItem({ ...newItem, [key]: value })
  }

  const changeContents = e => {
    const { key, value } = e.target
    setNewItem({ ...newItem, [key]: value })
  }

  const onSubmit = e => {
    e.preventDefault()
    const data = { ...values }
    axios({
      headers: {
        contentType: 'application/json',
      },
      method: 'POST',
      url: '/items#create',
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
        <TextField key="topic" label="topic" onChange={changeTopic}>
          Topic
        </TextField>
        <TextField key="contents" label="contents" onChange={changeContents}>
          Contents
        </TextField>
        <Button variant="contained" type="submit">
          Save
        </Button>
        {items.map(item => (
          <li key={item.id}>
            {item.topic}:{item.contents}
          </li>
        ))}
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(Checklist))
