import React, { useState, useEffect } from 'react'
import CommentBox from './CommentBox'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const styles = theme => ({})

const BlogShow = ({ classes, history, match }) => {
  const [blog, setBlog] = useState({})
  useEffect(() => {
    axios({
      headers: {
        contentType: 'application/json',
      },
      method: 'GET',
      url: `/blogs/${match.params.blogId}`,
    })
      .then(response => {
        setBlog(response.data)
        console.log(response.data)
      })
      .catch(error => {})
  }, [])

  return (
    <>
      <Typography key="title">{blog.title}</Typography>
      <Typography key="contents">{blog.contents}</Typography>
      <CommentBox/>
      <Button onClick={() => history.push('/_/blog')}>Back to list</Button>
    </>
  )
}

export default withStyles(styles)(withRouter(BlogShow))
