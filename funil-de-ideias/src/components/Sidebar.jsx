import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  // Função auxiliar para destacar o link ativo
  const isActive = (path) => {
    return location.pathname === path 
      ? "bg-blue-700 text-white shadow-sm" 
      : "text-blue-100 hover:bg-blue-800 hover:text-white";
  };

  return (
    <aside className="w-64 bg-blue-900 min-h-screen flex flex-col shadow-xl fixed left-0 top-0 z-50">
      
      {/* Logo da Empresa */}
      <div className="p-6 border-b border-blue-800">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Simula.IA 🚀
        </h1>
        <p className="text-xs text-blue-300 mt-1">Gestão de Inovação</p>
      </div>

      {/* Menu de Navegação */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        
        <Link to="/" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/')}`}>
          <span>🏠</span> Dashboard
        </Link>

        <Link to="/ideias" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/ideias')}`}>
          <span>💡</span> Mural de Ideias
        </Link>

        <Link to="/avaliacao" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/avaliacao')}`}>
          <span>⚖️</span> Avaliação
        </Link>

      </nav>

      {/* Rodapé da Sidebar */}
      <div className="p-4 border-t border-blue-800">
        <Link to="/ideias/nova" className="flex items-center justify-center w-full bg-white text-blue-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition shadow-lg">
          + Nova Ideia
        </Link>
      </div>

    </aside>
  );
}