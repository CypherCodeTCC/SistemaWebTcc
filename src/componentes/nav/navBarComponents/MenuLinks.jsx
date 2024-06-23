import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dropdown({ isOpen, children }) {
  return <div className={`dropdown ${isOpen ? "show" : ""}`}>{children}</div>;
}

function MenuLinks() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Função para ajustar o z-index do cabeçalho principal
  const setMainHeadingZIndexBasedOnState = (isMenuOpen) => {
    const mainHeadings = document.querySelectorAll(".mainHeading");
    mainHeadings.forEach((mainHeading) => {
      mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
    });
  };

  setMainHeadingZIndexBasedOnState(isDropdownOpen);

  return (
    <div className="navbar-links desktop">
      <ul className="lista">
        <li onClick={() => navigate("/")}>
          <a>Home</a>
        </li>
        <li
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a>Categorias</a>
          <Dropdown isOpen={isDropdownOpen}>
            <p onClick={() => navigate("/produto/geral?genero=Suspense&editora=&preco=")}>Suspense</p>
            <p onClick={() => navigate("/produto/geral?genero=Terror&editora=&preco=")}>Terror</p>
            <p onClick={() => navigate("/produto/geral?genero=Romance&editora=&preco=")}>Romance</p>
            <p onClick={() => navigate("/produto/geral?genero=Dev.%20Pessoal&editora=&preco=")}>Dev. Pessoal</p>
            <p onClick={() => navigate("/produto/geral?genero=Classico&editora=&preco=")}>Clássico</p>
            <p onClick={() => navigate("/produto/geral?genero=Geek&editora=&preco=")}>Geek</p>
          </Dropdown>
        </li>
        <li onClick={() => navigate("/")}>
          <a>Ofertas</a>
        </li>
        <li onClick={() => navigate("/")}>
          <a>Eventos</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuLinks;
