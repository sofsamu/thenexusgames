'use client';
import { useEffect, useState } from 'react';
import React from 'react';

const GameDetails = ({ params }) => {
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Desenvuelve 'params' con React.use()
  const { id } = React.use(params);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=ebfb1bdef5bf4d1dafb2b3fc19a3beb9`);
        if (response.ok) {
          const data = await response.json();
          setGameDetails(data);  // Establece los detalles del juego
        } else {
          console.error("Error fetching game details");
        }
      } catch (error) {
        console.error("Error en la llamada a la API", error);
      }
      setLoading(false);
    };

    if (id) {
      fetchGameDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-600 text-lg">Cargando detalles del juego...</p>
      </div>
    );
  }

  if (!gameDetails) {
    return <p>No se pudo encontrar el juego.</p>;
  }

  return (
    <div className="p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg glassmorphic-container">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        {gameDetails.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={gameDetails.background_image}
            alt={gameDetails.name}
            className="w-full h-80 object-cover rounded-md mb-4"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Descripción</h3>
          <p className="text-gray-600 dark:text-gray-300">{gameDetails.description_raw}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Géneros</h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              {gameDetails.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Calificación</h4>
            <p className="text-gray-600 dark:text-gray-300">{gameDetails.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;