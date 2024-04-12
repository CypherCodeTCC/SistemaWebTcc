import { useState } from 'react'

import NavBar from './components/navBar/NavBar.jsx';
import Header from './routes/heroSection/HeroSection.jsx';
import DescSection from './routes/descSection/DescSection.jsx';
import DestaquesSection from './routes/destaquesSection/DestaquesSection.jsx';
import CategoriesSection from './routes/categoriesSec/CategoriesSec.jsx';

import './main.css'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <DescSection />
      <DestaquesSection />
      <CategoriesSection />
    </>
  )
}

export default App