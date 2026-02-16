import "./globals.css";
import { AppProvider } from "@/lib/AppContext";
import Navigation from "@/components/layout/Navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // This is the text that appears in the tab (e.g., "WASP-2 Portfolio")
  title: "Wasp-2 AI | Collective",
  
  // This is the description for SEO (Google search results)
  description: "Global AI & Software Development",
  
  // This is the small logo (Favicon) you circled
  icons: {
    icon: '/icon.png', // Make sure 'logo.png' is in your 'public' folder
  },
};
// -------------------------


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Navbar />
        
          <Navigation />
          {children}
          <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}

