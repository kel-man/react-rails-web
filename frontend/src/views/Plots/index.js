import React from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Plot from 'react-plotly.js'
import MockData from '../../components/MockData'

// const Plotly = require('plotly.js-dist')

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
  textField: {
    marginBottom: '20px',
  },
})

const Plots = ({classes, history}) => {
  return(<>
    <CssBaseline />
    <Typography>Plots page</Typography>
     <Plot
        data={MockData}
        layout={ {width: 1200, height: 900, title: 'Example'} }
      />
  </>
  )
}

export default withStyles(styles)(withRouter(Plots))
