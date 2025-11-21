import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar'; // Importando a nova Sidebar

import { Dashboard } from './pages/Dashboard';
import { Ideias } from './pages/Ideias';
import { NovaIdeia } from './pages/NovaIdeia';
import { Avaliacao } from './pages/Avaliacao';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        
        {/* 1. A Sidebar fixa à esquerda */}
        <Sidebar />

        {/* 2. O Conteúdo Principal (empurrado para a direita) */}
        <main className="flex-1 ml-64 p-8 transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            {/* Aqui as páginas mudam conforme a rota */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ideias" element={<Ideias />} />
              <Route path="/ideias/nova" element={<NovaIdeia />} />
              <Route path="/avaliacao" element={<Avaliacao />} />
            </Routes>
          </div>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App