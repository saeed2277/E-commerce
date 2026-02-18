import { ReactNode } from "react";
import "../styles/globals.css";
import Footer from "../components/shared/Footer";
import "../lib/Fontawesome";
import { ToastContainer, Bounce } from "react-toastify";
import Providers from "../components/providers/Providers";
import { verifyToken } from "../features/auth/server/auth.action";
import { getToCart } from "../features/cart/server/cart.action";
import { CartState } from "../features/cart/store/cart.slice";
import ClientNavbar from "../components/shared/clientNavbar";





let cartState:CartState={
  cartId: null,
  numOfCartItems: 0,
  products: [],
  totalCartPrice: 0,
  isLoading: false,
  error: null,
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const valueAuth = await verifyToken()
  if(valueAuth.isAuthentication){
    try {
      const cartResponse = await getToCart();
      cartState = {
        cartId: cartResponse.cartId,
        numOfCartItems: cartResponse.numOfCartItems,
        products: cartResponse.data.products,
        totalCartPrice: cartResponse.data.totalCartPrice,
        isLoading: false,
        error: null,
      };

    } catch (error) {
      throw error;
    }
  }
  return (
    <html lang="en">
      <body>
       <Providers preloadedState={{auth:valueAuth ,cart:cartState}}>
         <ClientNavbar />
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
