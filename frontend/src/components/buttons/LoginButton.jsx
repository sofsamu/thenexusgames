import React from "react";
import Link from "next/link";

export default function LoginButton() {
  return (
    <div>
      <Link
        href="/"
        className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 hover:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
      >
        Iniciar Sesión
      </Link>
    </div>
  );
}