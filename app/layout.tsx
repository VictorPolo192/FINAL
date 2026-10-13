import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Casa Desconecta | 48 horas para volver a ti",
  description: "Una casa rural para dejar las pantallas y disfrutar 48 horas de naturaleza, calma y tiempo para ti.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
