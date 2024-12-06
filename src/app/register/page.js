"use client";

import { generateViewport } from "libreria-o-modulo"; // Ejemplo: donde importes esta función.

export default function RegisterPage() {
  React.useEffect(() => {
    const viewport = generateViewport();
    console.log(viewport);
  }, []);
  return <div>Registro</div>;
}