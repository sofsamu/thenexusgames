'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const TrendingGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Para manejar errores
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true); // Empieza el estado de carga
      setError(null); // Resetea el error

      try {
        const response = await fetch('https://api.rawg.io/api/games?key=ebfb1bdef5bf4d1dafb2b3fc19a3beb9&page_size=10&ordering=-added');
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de los juegos');
        }

        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error('Error al obtener los juegos populares:', error);
        setError(error.message); // Almacena el error en el estado
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchGames();
  }, []); // Solo se ejecuta una vez al cargar el componente

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

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-red-600 text-lg">Error: {error}</p>
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