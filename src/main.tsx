/**
 * Main Entry Point
 * 
 * Purpose: Renders the root React component into the DOM
 * Why here: Standard React entry point, initializes React application
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
