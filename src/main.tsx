import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfettiBackground } from './components/background/Background.tsx'
// import { ConfettiBackground } from './components/background/Background.tsx'
// import DialogDemo from './components/dialog/fullscreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfettiBackground>
      <App />
      {/* <DialogDemo /> */}

    </ConfettiBackground>
  </StrictMode>,
)
