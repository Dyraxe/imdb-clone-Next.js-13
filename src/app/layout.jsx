import Providers from "./Providers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "IMDb clone",
  description: "IMDb clone done with NEXT.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="overflow-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
