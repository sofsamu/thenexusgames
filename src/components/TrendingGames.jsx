'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPopularGames } from '@/app/api/apiRawg';  // Importa correctamente la función desde la ruta de tu API

const TrendingGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      const popularGames = await getPopularGames(10);  // Llama a la función que ya tienes definida
      setGames(popularGames);
      setLoading(false);
    };

    fetchGames();
  }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente

  const handleGameClick = (id) => {
    router.push(`/gameDetails/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-600 text-lg">Cargando juegos en tendencia...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg glassmorphic-container">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Juegos en Tendencia
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="p-4 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 glassmorphic-card"
            onClick={() => handleGameClick(game.id)}
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center truncate">
              {game.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGames;