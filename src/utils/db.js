import mysql from 'mysql2/promise';

// Configuración de la conexión
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // Dirección de tu servidor (localhost o remoto)
  user: process.env.DB_USER,       // Usuario de la BD
  password: process.env.DB_PASS,   // Contraseña del usuario
  database: process.env.DB_NAME    // Nombre de la BD
});

export default pool;