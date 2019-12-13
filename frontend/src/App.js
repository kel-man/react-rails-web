import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import './App.css'
import AppRouter from './AppRouter'
import axios from 'axios'
import Theme from './Theme'
import AuthContext from './AuthContext'

const appStyle = {
  backgroundColor: '#333',
  minHeight: '100vh',
}

function App() {
  const [authContext, setAuthContext] = useState({})

  useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      url: '/authstate',
    })
      .then(response => {
        console.log(response.data)
        setAuthContext(response.data)
      })
      .catch(error => {})
  }, [])

  return (
    <div style={appStyle}>
      <AuthContext.Provider value={authContext}>
        <ThemeProvider theme={Theme}>
          <AppRouter />
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  )
}

export default App
