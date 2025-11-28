import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. IMPORTANTE: Importar o provedor
import { IdeiasProvider } from './context/IdeiasContext.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. IMPORTANTE: Envolver o App com o Provider */}
    <IdeiasProvider>
      <App />
    </IdeiasProvider>
  </StrictMode>,
)