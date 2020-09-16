import React, { useState, useEffect } from 'react'
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import NoteIcon from '@material-ui/icons/Note'

const drawerWidth = 240
const styles = theme => ({
  form: {
    display: 'flex',
    flexFlow: 'column',
    maxWidth: '500px',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: theme.ash,
  },
  drawer: {
    marginTop: '50px',
    width: drawerWidth,
  },
  container: {
    display: 'flex',
    marginLeft: drawerWidth,
    alignItems: 'left',
    flexFlow: 'column',
  },
})

const Checklist = ({ classes, history }) => {
  const [items, setItems] = useState([])
  const [editItem, setEditItem] = useState({ topic: '', contents: '' })
  const [refresh, setRefresh] = useState(0)
  const [currentItem, setCurrentItem] = useState({})

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
    setEditItem({ ...editItem, topic: value })
  }

  const changeContents = e => {
    const { key, value } = e.target
    setEditItem({ ...editItem, contents: value })
  }

  const onSubmit = e => {
    // e.preventDefault()
    const data = { topic: editItem.topic, contents: editItem.contents }
    !'id' in editItem
      ? axios({
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
      : axios({
          headers: {
            contentType: 'application/json',
          },
          method: 'PATCH',
          url: `/items/${editItem.id}`,
          data: {
            item: data,
          },
        })
          .then(response => {
            console.log(response)
            setRefresh(refresh + 1)
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

  const expandItem = item => {
    setCurrentItem(item)
    setEditItem(item)
    setRefresh(refresh + 1)
    console.log(item)

    // return (
    //   <div>
    //     <Typography>Topic</Typography>
    //     <TextField defaultValue={item.topic}></TextField>
    //     <Typography>Contents</Typography>
    //     <TextField defaultValue={item.contents}>Some Stuff</TextField>
    //   </div>
    // )
  }

  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Typography>Checklist</Typography>
        <Button variant="contained" type="submit" onClick={onSubmit}>
          Save
        </Button>
        <Typography>Item Topic</Typography>
        <TextField key="currentTopic" value={editItem.topic} onChange={changeTopic} />
        <Typography>Details</Typography>
        <TextField key="currentItem" value={editItem.contents} onChange={changeContents} />
        <Button key={currentItem.id} onClick={() => onDelete(currentItem.id)}>
          Delete
        </Button>
        {/*items.map(item => (
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
          </li>
        ))*/}
      </Container>
      <Drawer variant="permanent" anchor="left" classes={{ paper: classes.drawer }}>
        <div />
        <Divider />
        <List>
          {items.map(item => (
            <ListItem button key={item.topic} onClick={() => expandItem(item)}>
              <NoteIcon></NoteIcon>
              <ListItemText primary={item.topic} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default withStyles(styles)(withRouter(Checklist))
