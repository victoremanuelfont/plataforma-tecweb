import { IdeiaCard } from "../components/IdeiaCard";

export function Avaliacao() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Fila de Avaliação ⚖️
        </h1>
        <p className="text-gray-600 mt-2">
          Ideias que completaram a definição e aguardam análise técnica.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Exemplo 1: Pronta para Avaliação */}
        <div className="relative group">
          {/* Efeito visual de "destaque" para mostrar que requer atenção */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-white rounded-lg p-1">
            <IdeiaCard 
              titulo="Integração com ERP Legado"
              status="Pronta para Avaliação" 
              descricao="Processos manuais de sincronização geram erros e atrasos no faturamento."
              tags={['integração', 'automação', 'eficiência']}
              votos={31}
              comentarios={4}
            />
            {/* Botão de Ação Exclusivo desta tela */}
            <button className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-b-md hover:bg-indigo-700 transition font-medium shadow-sm">
              Avaliar Ideia →
            </button>
          </div>
        </div>

        {/* Exemplo 2 */}
        <div className="relative bg-white rounded-lg p-1 shadow-sm border border-gray-200">
           <IdeiaCard 
              titulo="Dashboard Gerencial Mobile"
              status="Pronta para Avaliação"
              descricao="Gestores precisam acessar KPIs em tempo real durante reuniões externas."
              tags={['mobile', 'analytics', 'gestão']}
              votos={18}
              comentarios={2}
            />
             <button className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-b-md hover:bg-indigo-700 transition font-medium shadow-sm">
              Avaliar Ideia →
            </button>
        </div>

      </div>
    </div>
  );
}