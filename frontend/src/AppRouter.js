import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './views/TemplateHome/'
import SignUp from './views/SignUp/'
import FAQ from './views/FAQ/'
import Login from './views/Login/'
import Navbar from './components/NavBar'

const AppRouter = () => {

  return (<>
    <Router >
      <Navbar />
      <Switch>
        <Route path="/_/FAQ" component={FAQ} />
        <Route path="/_/login" component={Login} />
        <Route path="/_/signup" component={SignUp} />
        <Route path="/_/homepage" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  </>)
}

export default AppRouter
