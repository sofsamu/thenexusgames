const API_KEY = 'ebfb1bdef5bf4d1dafb2b3fc19a3beb9';
const BASE_URL = 'https://api.rawg.io/api/';

// Función para obtener juegos populares
export const getPopularGames = async (pageSize = 10) => {
  const url = `${BASE_URL}games?key=${API_KEY}&page_size=${pageSize}&ordering=-added`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error al obtener los juegos populares:', error);
    return [];
  }
};

// Función para obtener juegos por género
export const getGamesByGenre = async (genreId, pageSize = 10) => {
  const url = `${BASE_URL}games?key=${API_KEY}&page_size=${pageSize}&genres=${genreId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error al obtener juegos del género ${genreId}:`, error);
    return [];
  }
};

// Función para obtener detalles de un juego específico
export const getGameDetails = async (gameId) => {
  const url = `${BASE_URL}games/${gameId}?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener detalles del juego ${gameId}:`, error);
    return null;
  }
};