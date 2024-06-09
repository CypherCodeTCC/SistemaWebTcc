import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dropdown({ isOpen, children }) {
  return (
    <div className={`dropdown ${isOpen ? "show" : ""}`}>
      {children}
    </div>
  );
}

function MenuLinks() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Função para ajustar o z-index do cabeçalho principal
  const setMainHeadingZIndexBasedOnState = (isMenuOpen) => {
    const mainHeadings = document.querySelectorAll('.mainHeading');
    mainHeadings.forEach(mainHeading => {
      mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
    });
  };

  setMainHeadingZIndexBasedOnState(isDropdownOpen);

  return (
    <div className="navbar-links desktop">
      <ul className="lista">
        <li>
          <a onClick={() => navigate('/')}>Home</a>
        </li>
        <li
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a onClick={() => navigate('/')}>Categorias</a>
          <Dropdown isOpen={isDropdownOpen}>
            <a href="/">Desenvolvimento Pessoal</a>
          </Dropdown>
        </li>
        <li>
          <a onClick={() => navigate('/')}>Ofertas</a>
        </li>
        <li>
          <a onClick={() => navigate('/')}>Eventos</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuLinks;
