import { useParams } from 'react-router-dom';
import { useState } from 'react';

export function DetalhesIdeia() {
  // Pega o ID da URL (ex: /ideias/1)
  const { id } = useParams();
  
  // Estado para controlar qual aba está ativa
  const [activeTab, setActiveTab] = useState('resumo');

  return (
    <div className="p-8">
      {/* Cabeçalho da Ideia */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Portal de Autoatendimento</h1>
            <p className="text-gray-500 mt-1">ID: {id} • Criado em 20/11/2025</p>
          </div>
          <span className="bg-blue-100 text-blue-800 font-bold px-4 py-1 rounded-full uppercase text-sm">
            Geração
          </span>
        </div>
      </div>

      {/* Navegação em Abas (Tabs) */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveTab('resumo')}
            className={`pb-4 font-medium transition-colors ${
              activeTab === 'resumo' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Resumo
          </button>
          <button
            onClick={() => setActiveTab('definicao')}
            className={`pb-4 font-medium transition-colors ${
              activeTab === 'definicao' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Definição do Produto
          </button>
          <button
            onClick={() => setActiveTab('anexos')}
            className={`pb-4 font-medium transition-colors ${
              activeTab === 'anexos' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Anexos
          </button>
        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[300px]">
        
        {activeTab === 'resumo' && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Descrição do Problema</h3>
            <p className="text-gray-600 leading-relaxed">
              Clientes enfrentam dificuldade para acessar informações básicas fora do horário comercial,
              gerando insatisfação e sobrecarga no atendimento humano no dia seguinte.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-700 uppercase mb-4">Comentários Recentes</h4>
              {/* Mock de comentário */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                  JS
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">João Silva</p>
                  <p className="text-gray-600 text-sm mt-1">Excelente iniciativa! Isso vai reduzir nosso custo operacional.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'definicao' && (
          <div className="text-center py-10 text-gray-500">
            🚧 Formulário de Definição em construção...
          </div>
        )}

        {activeTab === 'anexos' && (
          <div className="text-center py-10 text-gray-500">
            📎 Nenhum anexo adicionado ainda.
          </div>
        )}

      </div>
    </div>
  );
}