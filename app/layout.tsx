import "./globals.css";
import { Montserrat, Lobster_Two } from "next/font/google";
import Navigation from "./components/Navigation";
import Head from "./components/Head";
import Icons from "./components/Icons";
import Footer from "./components/Footer";

const lob = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster-two",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monstserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-blue-dark">
      <head>
        <Head />
      </head>
      <body className={montserrat.className}>
        <Navigation font_lobster_two={lob.className} />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
