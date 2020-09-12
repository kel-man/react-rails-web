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
  const [newItem, setNewItem] = useState({ topic: '', contents: '' })
  const [refresh, setRefresh] = useState(0)

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
  }, [refresh])

  const changeTopic = e => {
    const { key, value } = e.target
    setNewItem({ ...newItem, topic: value })
  }

  const changeContents = e => {
    const { key, value } = e.target
    setNewItem({ ...newItem, contents: value })
  }

  const onSubmit = e => {
    // e.preventDefault()
    const data = { topic: newItem.topic, contents: newItem.contents }
    axios({
      headers: {
        contentType: 'application/json',
      },
      method: 'POST',
      url: '/items',
      data: {
        item: data,
      },
    })
      .then(response => {
        console.log(response)
        setRefresh(refresh + 1)
        setNewItem({})
      })
      .catch(error => {})
  }

  const onDelete = id => {
    console.log('/items#{' + id + '}')
    axios({
      headers: {
        contentType: 'application/json',
      },
      method: 'DELETE',
      url: `/items/${id}`,
      data: { id },
    })
      .then(response => {
        console.log(response)
        setRefresh(refresh + 1)
      })
      .catch(error => console.log(error))
  }

  // const updateItem = id => {
  //   axios({
  //     headers: {
  //       contentType: 'application.json',
  //     }
  //     method: 'PATCH',
  //     url: '/items',
  //     data: { data },
  //   }).then(response => {
  //     console.log(response)
  //   }).catch(error => {})
  // }

  return (
    <>
      <CssBaseline />
      <Container>
        <Typography>Checklist</Typography>
        <TextField key="topic" label="topic" onChange={changeTopic}>
          topic
        </TextField>
        <TextField key="contents" label="contents" onChange={changeContents}>
          Contents
        </TextField>
        <Button variant="contained" type="submit" onClick={onSubmit}>
          Save
        </Button>
        {items.map(item => (
          <li key={item.id}>
            {item.topic} : {item.contents}
            <Button
              key={item.id}
              onClick={() => {
                onDelete(item.id)
              }}
            >
              Delete
            </Button>
            {/* <Button type="update" key={item.id} onClick={()=>{updateItem(item.id)}}>Update</Button> */}
          </li>
        ))}
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(Checklist))
