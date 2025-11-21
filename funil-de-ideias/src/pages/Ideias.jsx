import { Link } from 'react-router-dom'; // <--- Importante: Importar o Link
import { IdeiaCard } from "../components/IdeiaCard";

export function Ideias() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Mural de Ideias 💡
        </h1>
      </div>

      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        
        {/* CARD 1 - AGORA TEM O LINK EM VOLTA */}
        <Link to="/ideias/1" className="transition-transform hover:-translate-y-1">
          <IdeiaCard 
            titulo="Portal de Autoatendimento"
            status="Geração"
            descricao="Clientes enfrentam dificuldade para acessar informações fora do horário."
            tags={['autoatendimento', 'experiência']}
            votos={23}
            comentarios={1}
          />
        </Link>

        {/* CARD 2 */}
        <Link to="/ideias/2" className="transition-transform hover:-translate-y-1">
          <IdeiaCard 
            titulo="Programa de Fidelidade"
            status="Aprovada"
            descricao="Taxa de retenção abaixo da média. Gamificação necessária."
            tags={['marketing', 'retenção']}
            votos={45}
            comentarios={12}
          />
        </Link>

         {/* CARD 3 */}
         <Link to="/ideias/3" className="transition-transform hover:-translate-y-1">
           <IdeiaCard 
            titulo="Marketplace de Terceiros"
            status="Rejeitada"
            descricao="Complexidade operacional muito alta para o momento."
            tags={['expansão']}
            votos={8}
            comentarios={3}
          />
        </Link>

      </div>
    </div>
  );
}