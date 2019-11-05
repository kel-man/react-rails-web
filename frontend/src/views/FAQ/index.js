import React from 'react'
import NavBar from '../../components/NavBar'
import {
  Container,
  CssBaseline,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'
import styles from '../../components/styles'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const FAQ = ({history}) => {
  return(
    <>
      <NavBar />
      <CssBaseline />
      <Container>
        <Typography>Frequently Asked Questions</Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='heading'>Who are the Brothers Yafuso?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              The brothers Liam and Kelen Yafuso are two
              insightful and talented engineers specializing
              in consultation and advanced web development. We
              emphazise the power and efficiency of customizable
              solutions and engines while staying up to date
              with bleeding edge, lightning fast technology
              and techniques.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            aria-controls="Panel1a-content"
            id="panel1a-header"
          >
            <Typography className='heading'>Why do we do it?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              We fervently believe in the advancement of human understanding
              and technology. By utilizing top-of-the-line and cutting edge
              libraries and strategies, we pave the way for
              logical and adaptable construction of software that is
              not only powerful out-of-the-box, but is also
              ready for expansion and reorientation with fluidity
              and with no loss in power.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </>
  )
}

export default withStyles(styles)(withRouter(FAQ))
