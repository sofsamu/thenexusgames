'use client';

import React, { useState } from 'react';

export default function RegisterPage() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Actualiza el campo correspondiente
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Convierte el objeto en JSON
      });

      if (response.ok) {
        console.log('Usuario registrado con éxito');
      } else {
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error al enviar los datos', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}