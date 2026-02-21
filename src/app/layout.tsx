
import { ReactNode } from "react";
import "../styles/globals.css";
import Footer from "../components/shared/Footer";
import "../lib/Fontawesome";
import Providers from "../components/providers/Providers";
import { verifyToken } from "../features/auth/server/auth.action";
import { getToCart } from "../features/cart/server/cart.action";
import { CartState } from "../features/cart/store/cart.slice";
import Navbar from "../components/shared/Navbar";


let defaultCartState: CartState = {
  cartId: null,
  numOfCartItems: 0,
  products: [],
  totalCartPrice: 0,
  isLoading: false,
  error: null,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const valueAuth = await verifyToken();
  let cartState = defaultCartState;
  if (valueAuth.isAuthentication) {
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
      cartState = defaultCartState;
    }
  }
  return (
    <html lang="en">
      <body>
        <Providers preloadedState={{ auth: valueAuth, cart: cartState }}>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
