import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importando as páginas que acabamos de criar
import { Dashboard } from './pages/Dashboard';
import { Ideias } from './pages/Ideias';
import { NovaIdeia } from './pages/NovaIdeia';
import { Avaliacao } from './pages/Avaliacao';

function App() {
  return (
    <BrowserRouter>
      {/* MENU TEMPORÁRIO (Só para testarmos a navegação) */}
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/" className="hover:text-blue-300">Dashboard</Link>
        <Link to="/ideias" className="hover:text-blue-300">Ideias</Link>
        <Link to="/ideias/nova" className="hover:text-blue-300">Nova Ideia</Link>
        <Link to="/avaliacao" className="hover:text-blue-300">Avaliação</Link>
      </nav>

      {/* AQUI ACONTECE A MÁGICA: O React troca o conteúdo da tela */}
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ideias" element={<Ideias />} />
          <Route path="/ideias/nova" element={<NovaIdeia />} />
          <Route path="/avaliacao" element={<Avaliacao />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App