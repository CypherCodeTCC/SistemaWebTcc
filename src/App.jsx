import { useState } from "react";

import NavBar from "./componentes/nav/NavBar.jsx";
import Header from "./routes/heroSection/HeroSection.jsx";
import DescSection from "./routes/descSection/DescSection.jsx";
import DestaquesSection from "./routes/destaquesSection/DestaquesSection.jsx";
import CategoriesSection from "./routes/categoriesSec/CategoriesSec.jsx";
import CardsSection from "./routes/cardsSec/CardsSec.jsx";
import DescontosSection from "./routes/descontosSec/Descontos.jsx";

import "./main.css";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <DescSection />
      <DestaquesSection />
      <CategoriesSection />
      <CardsSection />
      <DescontosSection />
    </>
  );
}

export default App;
