import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataApp from './DataApp'
import './data.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataApp />
  </StrictMode>,
)
