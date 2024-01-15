// En RootLayout.js
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="py-6">
          <nav className="container ">
            <ul className="flex gap-6 justify-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/slides">Slides</Link>
              </li>
              <li>
                <Link href="/">Proyectos</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
