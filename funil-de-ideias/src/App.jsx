// 1. A IMPORTAÇÃO
// Aqui dizemos: "React, vá na pasta components, pegue o arquivo IdeiaCard e traga pra cá"
import { IdeiaCard } from "./components/IdeiaCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Funil de Ideias 🚀
      </h1>

      {/* Grid para organizar os cards */}
      <div className="flex flex-wrap justify-center gap-6">
        
        {/* 2. A UTILIZAÇÃO (Carimbada 1 - Geração) */}
        {/* Aqui estamos "chutando" dados falsos para testar o visual (Mock) */}
        <IdeiaCard 
          titulo="Portal de Autoatendimento"
          status="Geração"
          descricao="Clientes enfrentam dificuldade para acessar informações fora do horário."
          tags={['autoatendimento', 'experiência']}
          votos={23}
          comentarios={1}
        />

        {/* 3. REUTILIZAÇÃO (Carimbada 2 - Aprovada) */}
        {/* Perceba que mudamos o status para testar se fica verde */}
        <IdeiaCard 
          titulo="Programa de Fidelidade"
          status="Aprovada"
          descricao="Taxa de retenção abaixo da média. Precisamos gamificar."
          tags={['marketing', 'retenção']}
          votos={45}
          comentarios={12}
        />

         {/* 4. REUTILIZAÇÃO (Carimbada 3 - Rejeitada) */}
         <IdeiaCard 
          titulo="Marketplace de Terceiros"
          status="Rejeitada"
          descricao="Complexidade operacional muito alta para o momento."
          tags={['expansão']}
          votos={8}
          comentarios={3}
        />

      </div>
    </div>
  )
}

export default App