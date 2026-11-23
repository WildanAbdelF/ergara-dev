import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERGARA // RELOAD - Portfolio & Dossier",
  description: "Personal Portfolio and Dossier inspired by Persona 3 Reload aesthetic. Showcasing Full-Stack capabilities, skills, and profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth antialiased dark">
      <body className="min-h-full flex flex-col font-sans bg-[#020612] text-slate-100 selection:bg-[#00f0ff] selection:text-black">
        {children}
      </body>
    </html>
  );
}
