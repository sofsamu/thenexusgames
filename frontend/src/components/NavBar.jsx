import React from "react";
import Link from "next/link";
import LoginButton from "./buttons/LoginButton";
import RegisterButton from "./buttons/RegisterButton";

export default function NavBar() {
  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">

        <div className="flex items-center space-x-4">
          <img
            src="/img/logo-gray.png" // Logo con estilo minimalista
            alt="Logo"
            className="h-8 w-auto transition-transform transform hover:scale-105"
          />
        </div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md transition-all duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md transition-all duration-200"
            >
              Juegos
            </Link>
          </li>
        </ul>
        <div className="relative flex items-center w-64">
          <input
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-200"
            type="text"
            placeholder="Buscar..."
          />
          <span className="absolute right-3 text-gray-500">🔍</span>
        </div>
        <div className="flex space-x-4">
          <LoginButton />
          <RegisterButton />
        </div>
      </nav>
    </header>
  );
}