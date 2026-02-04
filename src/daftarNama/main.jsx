import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DaftarNama from './DaftarNama'
import "./daftar.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DaftarNama />
  </StrictMode>,
)
