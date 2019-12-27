import React, { useState } from 'react'
import { Container, CssBaseline, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import ReactQuill from 'react-quill'

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
  const [quillValues, setQuillValues] = useState({
    text: '',
  })
  const handleChange = e => {
    const { value } = e.target
    setQuillValues({
      text: value,
    })
  }
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography>Your Board</Typography>
        <ReactQuill value={quillValues} onChange={handleChange} />
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(Whiteboard))
