import React from 'react';
import Link from "next/link";

export default function RegisterButton() {
  return (
    <div>
      <Link
        href="/"
        className="btn-nav bg-teal-700 bg-opacity-60 backdrop-blur-md text-white hover:bg-teal-600 px-6 py-2 rounded-lg shadow-md border border-teal-600 transition-all"
      >
        Registrarse
      </Link>
    </div>
  );
}