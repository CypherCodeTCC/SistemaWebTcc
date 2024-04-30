import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./componentes/nav/NavBar.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Error from "./routes/error/Error.jsx";
import Footer from "./componentes/footer/FooterBar.jsx";
import Login from "./routes/loginSec/Login.jsx";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default function RoutesConfig() {
  return (
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
        <Route path="/login" element={<Layout><Login/></Layout>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
