import { Link } from 'react-router-dom';
import { IdeiaCard } from "../components/IdeiaCard";
import { useIdeias } from '../context/IdeiasContext'; // <--- Importando a memória

export function Ideias() {
  const { ideias } = useIdeias(); // <--- Pegando a lista de dados reais

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Mural de Ideias 💡
          </h1>
          <p className="text-gray-500 mt-1">
            Mostrando {ideias.length} ideias cadastradas
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        
        {/* MÁGICA DO REACT: Criar um card para cada ideia na lista */}
        {ideias.map((ideia) => (
          <Link 
            key={ideia.id} // O React precisa de uma chave única para cada item
            to={`/ideias/${ideia.id}`} 
            className="transition-transform hover:-translate-y-1"
          >
            <IdeiaCard 
              titulo={ideia.titulo}
              status={ideia.status}
              descricao={ideia.descricao}
              tags={ideia.tags}
              votos={ideia.votos}
              comentarios={ideia.comentarios}
            />
          </Link>
        ))}

      </div>
    </div>
  );
}