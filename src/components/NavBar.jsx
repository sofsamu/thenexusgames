import React from "react";
import Link from "next/link";
import LoginButton from "./buttons/LoginButton";
import RegisterButton from "./buttons/RegisterButton";

export default function NavBar() {
  return (
    <header className="bg-transparent text-white shadow-md sticky top-0 z-50">
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
              Juegos
            </Link>
          </li>
        </ul>

        <div className="relative flex items-center">
          <input
            className="bg-teal-800 shadow-md text-white px-6 py-2 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            type="text"
            placeholder="Busca tus videojuegos..."
          />

        </div>

        <div className="flex space-x-4">
          <LoginButton/>
          <RegisterButton/>
        </div>
      </nav>
    </header>
  );
}