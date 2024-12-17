import React from "react";
import Link from "next/link";

export default function LoginButton() {
  return (
    <div>
      <Link
        href="/"
        className="btn-nav bg-white bg-opacity-30 backdrop-blur-md text-white hover:bg-teal-500 px-6 py-2 rounded-full shadow-md border border-gray-200 transition-all"
      >
        Iniciar Sesión
      </Link>
    </div>
  );
}