import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Acompanhe o fluxo de ideias da sua equipe</p>
        </div>
        <button 
          onClick={() => navigate('/ideias/nova')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
        >
          + Nova Ideia
        </button>
      </div>

      {/* Grid de KPIs (Indicadores) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Card 1: Total */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Total de Ideias</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-3xl font-extrabold text-gray-900">5</span>
            <span className="ml-2 text-sm text-green-600">💡 ativas</span>
          </div>
        </div>

        {/* Card 2: Em Geração */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-blue-500">
          <h3 className="text-blue-600 text-sm font-medium uppercase">Em Geração</h3>
          <div className="mt-2">
            <span className="text-3xl font-extrabold text-gray-900">2</span>
          </div>
        </div>

        {/* Card 3: Em Definição */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-yellow-500">
          <h3 className="text-yellow-600 text-sm font-medium uppercase">Em Definição</h3>
          <div className="mt-2">
            <span className="text-3xl font-extrabold text-gray-900">1</span>
          </div>
        </div>

        {/* Card 4: Aprovadas */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-green-500">
          <h3 className="text-green-600 text-sm font-medium uppercase">Aprovadas</h3>
          <div className="mt-2">
            <span className="text-3xl font-extrabold text-gray-900">1</span>
          </div>
        </div>

      </div>

      {/* Seção de Atalhos Rápidos */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-blue-900">Prontas para Avaliação</h3>
          <p className="text-blue-700 text-sm mt-1">Existem ideias aguardando sua revisão técnica.</p>
        </div>
        <button 
          onClick={() => navigate('/avaliacao')}
          className="bg-white text-blue-700 px-4 py-2 rounded border border-blue-200 hover:bg-blue-50 transition"
        >
          Ver Fila de Avaliação →
        </button>
      </div>

    </div>
  );
}