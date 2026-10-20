import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const RenderableApp = App as unknown as ComponentType

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RenderableApp />
  </StrictMode>,
)
