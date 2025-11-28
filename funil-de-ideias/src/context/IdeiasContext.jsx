import { createContext, useState, useContext } from 'react';

// 1. Criar a "caixa" (Contexto) onde guardaremos as ideias
const IdeiasContext = createContext();

// 2. Criar o "Provedor" (O componente que entrega os dados para o site)
export function IdeiasProvider({ children }) {
  
  // Aqui está a nossa "Memória" com algumas ideias iniciais para não ficar vazio
  const [ideias, setIdeias] = useState([
    {
      id: 1,
      titulo: "Portal de Autoatendimento",
      status: "Geração",
      descricao: "Clientes enfrentam dificuldade para acessar informações fora do horário.",
      tags: ['autoatendimento', 'experiência'],
      votos: 23,
      comentarios: 1
    },
    {
      id: 2,
      titulo: "Programa de Fidelidade",
      status: "Aprovada",
      descricao: "Taxa de retenção abaixo da média. Gamificação necessária.",
      tags: ['marketing', 'retenção'],
      votos: 45,
      comentarios: 12
    },
    {
      id: 3,
      titulo: "Marketplace de Terceiros",
      status: "Rejeitada",
      descricao: "Complexidade operacional muito alta para o momento.",
      tags: ['expansão'],
      votos: 8,
      comentarios: 3
    }
  ]);

  // Função para adicionar uma nova ideia na lista
  const adicionarIdeia = (novaIdeia) => {
    // Cria um ID único baseado na hora atual e define status inicial
    const ideiaCompleta = { 
      ...novaIdeia, 
      id: Date.now(), 
      status: 'Geração',
      votos: 0, 
      comentarios: 0 
    };
    
    // Adiciona a nova ideia no topo da lista antiga
    setIdeias([ideiaCompleta, ...ideias]);
  };

  return (
    <IdeiasContext.Provider value={{ ideias, adicionarIdeia }}>
      {children}
    </IdeiasContext.Provider>
  );
}

// 3. Um atalho (Hook) para facilitar o uso desse contexto nas páginas
export function useIdeias() {
  return useContext(IdeiasContext);
}