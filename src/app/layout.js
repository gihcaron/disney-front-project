import localFont from "next/font/local";
import "./globals.css";

const Poppins = localFont({
  src: [
      {
          path: "../../public/fonts/Poppins-Regular.ttf",
          weight: "400",
          style: "normal",
      },
      {
          path: "../../public/fonts/Poppins-SemiBold.ttf",
          weight: "500",
          style: "normal",
      }

  ],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata = {
  title: "Api Disney Web",
  description: "Projeto de consumo de API Disney",
  icons: {
      icon: "/icons/favicon.ico",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="pt-BR" className={Poppins.variable}>
          <body className={Poppins.className}>
              <main>{children}</main>
          </body>
      </html>
  );
}