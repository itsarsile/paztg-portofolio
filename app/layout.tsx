import { Montserrat } from "@next/font/google";
import { Michroma } from "@next/font/google";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${montserrat.variable} ${michroma.variable}`}>
      <head />
      <body>
        <Navbar />
        {children}
        <footer className="text-white flex  justify-between items-center p-5">
          <img src="./logo-dark.svg" className="w-12" />
          <p className="font-montserrat text-xs">
            Copyright © 2023 All right reserved - PaztG Design
          </p>
        </footer>
      </body>
    </html>
  );
}
