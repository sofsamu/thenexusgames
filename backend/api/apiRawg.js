// backend/api/apiRawg.js
import express from 'express';
import axios from 'axios';

const router = express.Router();
const API_KEY = 'ebfb1bdef5bf4d1dafb2b3fc19a3beb9';
const BASE_URL = 'https://api.rawg.io/api/';

// Endpoint para obtener juegos populares
router.get('/games', async (req, res) => {
  const pageSize = req.query.page_size || 10; // Página por defecto: 10 juegos
  const url = `${BASE_URL}games?key=${API_KEY}&page_size=${pageSize}&ordering=-added`;

  try {
    const response = await axios.get(url);
    res.json(response.data.results); // Devuelve los juegos populares
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Error al obtener los juegos populares' });
  }
});



export default router;