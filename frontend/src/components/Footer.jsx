import React from "react";
import GitButton from "./buttons/GitButton";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sección de GitHub */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-sm font-medium">
            Aporta al proyecto, da estrellas ⭐ o úsalo para crear el tuyo propio.
          </p>
          <GitButton />
        </div>
        {/* Separador */}
        <div className="border-t border-gray-300 mt-8"></div>
        {/* Derechos reservados */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            &copy;{" "}
            {typeof window !== "undefined" && new Date().getFullYear()} The Nexus Games.
          </p>
        </div>
      </div>
    </footer>
  );
}