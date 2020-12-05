import React, { useState, useEffect } from 'react'
import CommentBox from './CommentBox'
import { Avatar, Container, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const styles = theme => ({
  blogTitle: {
    paddingLeft: '40px',
  },
  blogContents: {},
  commentContainer: {},
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    alignSelf: 'flex-start',
    height: '150px',
    width: '150px',
  },
  header: {
    display: 'flex',
    flexFlow: 'row',
  },
})

const BlogShow = ({ classes, history, match }) => {
  const [blog, setBlog] = useState({
    owner: 'Null', // so that the empty avatar key does not crash the render
  })
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
      <Container className={classes.container}>
        <Container className={classes.header}>
          {blog.avatarURL && <img src={blog.avatarURL} className={classes.avatar} />}
          {!blog.avatarURL && <Avatar>{blog.owner.charAt(0)}</Avatar>}
          <Typography key="title" className={classes.blogTitle}>{blog.title}</Typography>
        </Container>
        <Typography key="contents" className={classes.blogContents}>{blog.contents}</Typography>
        <Container className={classes.commentContainer}>
          <CommentBox/>
        </Container>
      </Container>
      <Button onClick={() => history.push('/_/blog')}>Back to list</Button>
    </>
  )
}

export default withStyles(styles)(withRouter(BlogShow))
