import { Montserrat } from "@next/font/google";
import { Michroma } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
