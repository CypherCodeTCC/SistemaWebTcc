import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar.jsx';
import Header from './Components/HeroSection/HeroSection.jsx';
import DescSection from './Components/descSection/DescSection.jsx';
import DestaquesSection from './Components/destaquesSection/DestaquesSection.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <DescSection />
      <DestaquesSection />
    </>
  )
}

export default App