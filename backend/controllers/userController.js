import bcrypt from 'bcryptjs';
import { registerUser } from '../models/userModel.js';

const register = (req, res) => {
  const { name, email, password } = req.body;

  // Validar que los campos no estén vacíos
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Por favor complete todos los campos' });
  }

  // Verificar si el email ya está registrado (esto se puede optimizar)
  // Aquí deberíamos hacer una consulta para ver si ya existe el email
  // Para simplificar, asumimos que la verificación se hace correctamente.

  // Hash de la contraseña
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Error al encriptar la contraseña' });
    }

    // Registrar el usuario en la base de datos
    registerUser(name, email, hashedPassword, (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error al registrar el usuario' });
      }
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    });
  });
};

export { register };