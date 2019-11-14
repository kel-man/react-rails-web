import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import './App.css'
import AppRouter from './AppRouter'
import Theme from './Theme'
import AuthContext from './AuthContext'

const appStyle = {
  backgroundColor: '#333',
  minHeight: '100vh',
}

function App() {
  const [authContext, setAuthContext] = React.useState({})

  return (
    <div style={appStyle}>
      <AuthContext.Provider value={authContext}>
        <ThemeProvider theme={Theme}>
          <AppRouter/>
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App
