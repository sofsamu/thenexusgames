import connection from '../config/db.js';

const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;
  connection.query(query, (err) => {
    if (err) {
      console.error('Error creando la tabla de usuarios:', err);
    } else {
      console.log('Tabla de usuarios creada');
    }
  });
};

const registerUser = (name, email, password, callback) => {
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error registrando el usuario:', err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

createTable();

export { registerUser };