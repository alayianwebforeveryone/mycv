import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./../components/Navbar"
import Footer from "./../components/Footer"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#e9ebed] text-[#1d1e1e]">
        <Menu />
        
          {children} 
        
        <Footer/>
      </body>
    </html>
  );
}
