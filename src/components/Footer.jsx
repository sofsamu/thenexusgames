import React from "react";
import GitButton from "./buttons/GitButton";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <ul className="flex space-x-6 text-lg">
            <li className="flex items-center space-x-2">
              <p className="text-gray-300">
                Aporta al proyecto, da estrellas ⭐ o úsalo para crear el tuyo
                propio.
              </p>
              <GitButton/>
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center text-sm">
        <p>&copy; {typeof window !== 'undefined' && new Date().getFullYear()} The Nexus Games.</p>
        </div>
      </div>
    </footer>
  );
}
