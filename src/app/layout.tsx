import "./globals.css";
import { AppProvider } from "@/lib/AppContext";
import Navigation from "@/components/layout/Navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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

