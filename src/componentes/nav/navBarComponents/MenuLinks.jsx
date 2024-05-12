import React, { useState } from "react";

function Dropdown({ isOpen, children }) {
  return (
    <div className={`dropdown ${isOpen ? "show" : ""}`}>
      {children}
    </div>
  );
}

function MenuLinks() {
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
          <a href="/">Home</a>
        </li>
        <li
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="/">Categorias</a>
          <Dropdown isOpen={isDropdownOpen}>
            <a href="/">Subcategoria 1</a>
            <a href="/">Subcategoria 2</a>
            <a href="/">Subcategoria 3</a>
          </Dropdown>
        </li>
        <li>
          <a href="/">Ofertas</a>
        </li>
        <li>
          <a href="/">Eventos</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuLinks;
