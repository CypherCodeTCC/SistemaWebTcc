import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";

import Navbar from "./componentes/nav/NavBar.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Error from "./routes/error/Error.jsx";
import Footer from "./componentes/footer/FooterBar.jsx";
import Login from "./routes/loginSec/Login.jsx";
import SignUp from "./routes/signUpSec/SignUp.jsx";
import ProductPage from "./routes/productPageSec/ProductPage.jsx";
import { default as FilterPage } from "./routes/allProductsPage/AllProductsPage.jsx";
import CartProvider from "./context/cart/CartProvider.jsx";
import Cart from "./routes/cartSec/Cart.jsx";
import Profile from "./routes/profileSec/Profile.jsx";
import FinalizeRegister from "./routes/finalizeRegisterSec/FinalizeRegister.jsx";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <ToastContainer toastClassName="toast-black" />
    <div>{children}</div>
    <Footer />
  </div>
);

export default function RoutesConfig() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <SignUp />
              </Layout>
            }
          />
          <Route
            path="/produto/:id"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <FinalizeRegister />
              </Layout>
            }
          />
          <Route
            path="/produto/geral"
            element={
              <Layout>
                <FilterPage />
              </Layout>
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
