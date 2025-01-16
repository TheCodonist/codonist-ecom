import { Geist, Geist_Mono } from "next/font/google";
import './libs/fontawesome'
import "./globals.css";
import SideNav from "@/app/components/SideNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hamayun Aziz - The Codonist",
  description: "Experienced freelance web developer specializing in Laravel, Vue.js, and TailwindCSS. Offering custom web application development, responsive web design, and modern web solutions. Enhance your online presence with a professional, mobile-friendly, and SEO-optimized website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SideNav />
        <main className="lg:ml-72 lg:py-5">{children}</main>
        <footer className="py-5 lg:hidden">
          <div className="container mx-auto px-4">
            <p className="text-xs text-center">Codonist &copy; 2024.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
