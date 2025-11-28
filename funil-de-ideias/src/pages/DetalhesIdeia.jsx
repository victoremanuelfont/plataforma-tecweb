import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useIdeias } from '../context/IdeiasContext'; // <--- 1. Importando a memória

export function DetalhesIdeia() {
  const { id } = useParams();
  const { ideias } = useIdeias(); // <--- 2. Pegando a lista toda
  
  // 3. PROCURANDO A IDEIA CERTA:
  // "Encontre (find) a ideia onde o ID dela seja igual ao ID da URL"
  // O Number() é necessário porque a URL sempre traz o número como texto
  const ideia = ideias.find(i => i.id === Number(id));

  const [activeTab, setActiveTab] = useState('resumo');

  // Segurança: Se tentar acessar um ID que não existe
  if (!ideia) {
    return <div className="p-10 text-center text-gray-500">Ideia não encontrada! 😕</div>;
  }

  // Define a cor da etiqueta baseada no status (igual fizemos no Card)
  const statusColor = ideia.status === 'Aprovada' ? 'bg-green-100 text-green-800' 
                    : ideia.status === 'Rejeitada' ? 'bg-red-100 text-red-800'
                    : 'bg-blue-100 text-blue-800';

  return (
    <div className="p-8">
      {/* Botão Voltar */}
      <Link to="/ideias" className="text-sm text-gray-500 hover:text-blue-600 mb-4 inline-block">
        ← Voltar para o Mural
      </Link>

      {/* Cabeçalho DINÂMICO */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
               {/* Título Real */}
               <h1 className="text-3xl font-bold text-gray-800">{ideia.titulo}</h1>
               
               {/* Status Real */}
               <span className={`${statusColor} font-bold px-3 py-0.5 rounded-full uppercase text-xs tracking-wide`}>
                {ideia.status}
              </span>
            </div>
            <p className="text-gray-500 text-sm">ID #{ideia.id} • Fonte: {ideia.fonte || 'Não informada'}</p>
          </div>
        </div>
      </div>

      {/* Navegação em Abas */}
      <div className="mb-6">
        <nav className="flex gap-8 border-b border-gray-200">
          <button onClick={() => setActiveTab('resumo')} className={`pb-3 text-sm font-medium border-b-2 ${activeTab === 'resumo' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>Resumo</button>
          <button onClick={() => setActiveTab('definicao')} className={`pb-3 text-sm font-medium border-b-2 ${activeTab === 'definicao' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>Definição do Produto</button>
          <button onClick={() => setActiveTab('anexos')} className={`pb-3 text-sm font-medium border-b-2 ${activeTab === 'anexos' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>Anexos</button>
        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 min-h-[400px]">
        
        {activeTab === 'resumo' && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Descrição do Problema</h3>
            {/* Descrição Real */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {ideia.descricao}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="block text-xs text-gray-500 uppercase font-bold">Impacto Esperado</span>
                <span className="font-medium text-gray-800">{ideia.impacto || 'Não definido'}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="block text-xs text-gray-500 uppercase font-bold">Segmento</span>
                <span className="font-medium text-gray-800">{ideia.segmento || 'Geral'}</span>
              </div>
            </div>
            
            {/* Tags Reais */}
            <div className="mb-8">
               <h4 className="text-sm font-bold text-gray-700 uppercase mb-2">Tags</h4>
               <div className="flex gap-2">
                 {ideia.tags?.map((tag, idx) => (
                   <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-semibold">#{tag}</span>
                 ))}
               </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-4">Comentários ({ideia.comentarios})</h4>
              <p className="text-gray-500 italic text-sm">Ainda sem comentários recentes.</p>
            </div>
          </div>
        )}

        {activeTab === 'definicao' && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-lg font-medium text-gray-900">Em Construção</h3>
          </div>
        )}

        {activeTab === 'anexos' && (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-4xl mb-4">📎</div>
            <h3 className="text-lg font-medium text-gray-900">Nenhum anexo</h3>
          </div>
        )}

      </div>
    </div>
  );
}