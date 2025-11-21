import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar'; 

import { Dashboard } from './pages/Dashboard';
import { Ideias } from './pages/Ideias';
import { NovaIdeia } from './pages/NovaIdeia';
import { Avaliacao } from './pages/Avaliacao';
import { DetalhesIdeia } from './pages/DetalhesIdeia'; // <--- 1. ADICIONE ESTE IMPORT

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        
        <Sidebar />

        <main className="flex-1 ml-64 p-8 transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ideias" element={<Ideias />} />
              <Route path="/ideias/nova" element={<NovaIdeia />} />
              
              {/* 2. ADICIONE ESTA ROTA PARA OS DETALHES: */}
              <Route path="/ideias/:id" element={<DetalhesIdeia />} />
              
              <Route path="/avaliacao" element={<Avaliacao />} />
            </Routes>
          </div>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App