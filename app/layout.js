// En RootLayout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
