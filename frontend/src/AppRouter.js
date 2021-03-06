import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './views/HomePage/'
import SignUp from './views/SignUp/'

const AppRouter = () => {

  return (<>
    <Router >
      <Switch>
        <Route path="/_/signup" component={SignUp} />
        <Route path="/_/homepage" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  </>)
}

export default AppRouter
