import { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import "../lib/Fontawesome";
import { ToastContainer, Bounce } from "react-toastify";
import Providers from "../components/providers/Providers";
import { verifyToken } from "../features/auth/server/auth.action";






export default async function RootLayout({ children }: { children: ReactNode }) {
  const valueAuth = await verifyToken()
  return (
    <html lang="en">
      <body>
       <Providers preloadedState={{auth:valueAuth}}>
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
       </Providers>
      </body>
    </html>
  );
}
