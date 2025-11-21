import { useNavigate } from 'react-router-dom';

export function NovaIdeia() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Nova Ideia ✨
      </h1>

      <form className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
        
        {/* Campo: Nome da Ideia */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome da ideia *
          </label>
          <input 
            type="text" 
            placeholder="Ex: Portal de Autoatendimento"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        {/* Campo: Fonte */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fonte
          </label>
          <input 
            type="text" 
            placeholder="Ex: Feedback de Clientes, Análise de Mercado"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Campo: Problema (Área de texto maior) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problema do Cliente *
          </label>
          <textarea 
            rows="3"
            placeholder="Descreva o problema que esta ideia resolve"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          ></textarea>
        </div>

        {/* Grid para Segmento e Tags lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Segmento
            </label>
            <input 
              type="text" 
              placeholder="Ex: B2B, Varejo"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <input 
              type="text" 
              placeholder="Separe por vírgula"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Campo: Impacto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Impacto Esperado
          </label>
          <textarea 
            rows="2"
            placeholder="Qual o resultado esperado? Ex: Redução de 40% nas chamadas"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          ></textarea>
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-end gap-3 pt-4">
          <button 
            type="button"
            onClick={() => navigate('/ideias')} // Volta para a lista ao cancelar
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="button" // Mudaremos para submit depois
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            Submeter Ideia
          </button>
        </div>

      </form>
    </div>
  );
}