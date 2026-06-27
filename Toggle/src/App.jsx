import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { DarkLight, ThemeProvider } from './Components/DarkLight'

function App() {
  return(
    <>
    <ThemeProvider>
      <DarkLight/>
    </ThemeProvider>
    
    </>
  )
}

export default App
