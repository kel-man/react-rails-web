import React from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Plot from 'react-plotly.js'

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
var Information = {
  ReviewNumber: [],
  Brand: [],
  Variety: [],
  Style: [],
  Country: [],
  Stars: [],
}

const Ramen = require('../../data/ramen/ramen-ratings.json')
Ramen.map(item => {
  Information.ReviewNumber.push(item.Review)
  Information.Brand.push(item.Brand)
  Information.Variety.push(item.Variety)
  Information.Style.push(item.Style)
  Information.Country.push(item.Country)
  Information.Stars.push(item.Stars)
})

const Data = [
  {
    x: Information.ReviewNumber,
    y: Information.Stars,
    type: 'scatter',
    mode: 'markers',
    marker: {color: 'green'},
  },
  {
    type: 'bar',
    x: Information.ReviewNumber,
    y: Information.Stars,
  }
]

const Plots = ({classes, history}) => {
  return(<>
    <CssBaseline />
    <Typography>Plots page</Typography>
      <Plot

        data={Data}
        layout={ {width: 1200, height: 900, title: 'Ramens'} }
      />
      <Plot
        data={Data}
        layout={ {width: 1200, height: 900, title: 'Ramens'} }
      />
  </>
  )
}

export default withStyles(styles)(withRouter(Plots))
