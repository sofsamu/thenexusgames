import React from 'react'
import Link from "next/link";

export default function LoginButton() {
  return (
    <div>
      <Link
            href="/"
            className="btn-nav shadow-md bg-teal-800 hover:bg-teal-500 px-6 py-2 rounded"
          >
            Iniciar Sesión
          </Link>
    </div>
  )
}
