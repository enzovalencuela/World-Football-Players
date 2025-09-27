import "./globals.css";

export const metadata = {
  title: "World Football Players",
  description:
    "Aqui você fica por dentro de tudo do futebol mundial! Pesquise por jogadores e clubes mundiais sem nenhuma dificuldade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/48b3505341.js"
          async
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="architects-daughter-regular">{children}</body>
    </html>
  );
}
