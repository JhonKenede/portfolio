// En RootLayout.js
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { montserrat } from "./ui/fonts";
import Navbar from "./Navbar/page";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
