export const metadata = {
  title: "SOLUTION IT",
  description: "Transforma tu negocio con soluciones de IT innovadoras",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
         <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
     <script dangerouslySetInnerHTML={{ __html: "AOS.init();" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
