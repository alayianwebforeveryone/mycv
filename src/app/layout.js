import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./../components/Navbar"
import Footer from "./../components/Footer"

const inter = Inter({ 
  subsets: ['vietnamese'],
 });

export const metadata = {
  title: "Alayian Saeed",
  description: "Web development",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#e9ebed] text-[#1d1e1e] f ${inter.className} `}>
        <Menu />
        
          {children} 
        
        <Footer/>
      </body>
    </html>
  );
}
