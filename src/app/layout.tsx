import { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import "../lib/Fontawesome";
import { ToastContainer, Bounce } from "react-toastify";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
