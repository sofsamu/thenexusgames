import React from 'react'
import Link from "next/link";

export default function RegisterButton() {
  return (
    <div>
      
      <Link
            href="/"
            className="btn-nav shadow-md bg-white text-teal-700 hover:bg-teal-500 hover:text-white px-6 py-2 rounded"
          >
            Registrarse
          </Link>
    </div>
  )
}
