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
              in consultation regarding web development. We
              emphazise the power and efficiency of customizable
              solutions and engines while staying up to date
              with bleeding edge, lightning fast technology
              and techniques.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </>
  )
}

export default FAQ
