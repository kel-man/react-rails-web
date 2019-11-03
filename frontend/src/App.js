import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import logo from './logo.svg'
import './App.css'
import AppRouter from './AppRouter'
import Theme from './Theme'

const appStyle = {
  backgroundColor: '#333',
  minHeight: '100vh',
}

function App() {
  return (
    <div style={appStyle}>
      <ThemeProvider theme={Theme}>
        <AppRouter/>
      </ThemeProvider>
    </div>
  );
}

export default App
