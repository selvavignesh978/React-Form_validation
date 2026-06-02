import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import EstimateForm from './EstimateForm.jsx' // Updated name here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstimateForm /> 
  </StrictMode>,
)