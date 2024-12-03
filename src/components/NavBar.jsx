import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-teal-900 text-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="/img/logo-white.png"
            alt="Logo"
            className="h-10 w-auto transition-transform transform hover:scale-110"
          />
        </div>

        <ul className="flex space-x-8 text-lg font-semibold">
          <li>
            <Link
              href="/"
              className="nav-link hover:bg-teal-500 hover:text-white px-4 py-2 rounded"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="nav-link hover:bg-teal-500 hover:text-white px-4 py-2 rounded"
            >
              Descubre
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="nav-link hover:bg-teal-500 hover:text-white px-4 py-2 rounded"
            >
              Sobre Nosotros
            </Link>
          </li>
        </ul>

        <div className="relative flex items-center">
          <input
            className="bg-teal-800 shadow-md text-white px-6 py-2 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            type="text"
            placeholder="Busca tus videojuegos..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-2.5 text-gray-400"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/login"
            className="btn-nav shadow-md bg-teal-800 hover:bg-teal-500 px-6 py-2 rounded"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="btn-nav shadow-md bg-white text-teal-700 hover:bg-teal-500 px-6 py-2 rounded"
          >
            Registrarse
          </Link>
        </div>
      </nav>
    </header>
  );
}