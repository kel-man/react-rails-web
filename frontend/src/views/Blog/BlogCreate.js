import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'left',
    flexFlow: 'column',
  },
})

const BlogCreate = ({ classes, history }) => {
  const [newPost, setNewPost] = useState([])
  const [refresh, setRefresh] = useState(0)

  const changeTitle = e => {
    const { key, value } = e.target
    setNewPost({ ...newPost, title: value })
  }

  const changeContents = e => {
    const { key, value } = e.target
    setNewPost({ ...newPost, contents: value })
  }

  const savePost = () => {
    const data = { title: newPost.title, contents: newPost.contents }
    !('id' in newPost)
      ? axios({
          headers: {
            contentType: 'application/json',
          },
          method: 'POST',
          url: '/blogs',
          data: {
            blog: data,
          },
        })
          .then(response => {
            console.log(response)
            setRefresh(refresh + 1)
            setNewPost({})
          })
          .catch(error => {
            console.log(error)
          })
      : axios({
          headers: {
            contentType: 'application/json',
          },
          method: 'PATCH',
          url: `/blogs/${newPost.id}`,
          data: {
            item: data,
          },
        })
          .then(response => {
            console.log(response)
            setRefresh(refresh + 1)
          })
          .catch(error => {
            console.log(error)
          })
    history.push('/_/blog')
  }

  return (
    <>
      <TextField inputProps={{ 'data-testid': 'title' }} label="Blog Title" onChange={changeTitle} />
      <TextField
        inputProps={{ 'data-testid': 'contents' }}
        label="What would you like to say?"
        multiline
        rows={30}
        onChange={changeContents}
      />
      <Button onClick={() => savePost()}>Post!</Button>
      <Button onClick={() => history.push('/_/blog')}>Back to list</Button>
    </>
  )
}

export default withStyles(styles)(withRouter(BlogCreate))
