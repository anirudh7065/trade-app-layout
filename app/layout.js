import localFont from "next/font/local";
import Navbar from '@/components/Navbar/Navbar';
import 'react-circular-progressbar/dist/styles.css';
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home",
  description: "Layout for Home Page",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
