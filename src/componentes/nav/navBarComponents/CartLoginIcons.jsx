import React, { useState, useContext } from "react";
import CartIcon from "../../../../public/carrinho.svg";
import SearchIcon from "../../../../public/search.svg";
import PngUser from "../../../../public/user.png";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../context/cart/CartContext";

function PopupCarrinhoVazio({ setIsPopupOpen }) {
  const handleFechar = () => {
    setIsPopupOpen(false);
    setMainHeadingZIndexBasedOnState(false);
  };

  return (
    <div className="modal-overlay" onClick={handleFechar}>
      <div className="modal">
        <div className="modal-content">
          <i className="material-icons error-icon">error</i>
          <p>Carrinho vazio</p>
        </div>
      </div>
    </div>
  );
}

//FUNÇÃO PARA QUANDO O USUARIO ESTIVER LOGADO E CLICAR NO USUARIO, DESCER AS OPÇÕES
function Dropdown({ isOpen, children }) {
  return (
    <div className={`dropdownUser ${isOpen ? "show" : ""}`}>{children}</div>
  );
}

function setMainHeadingZIndexBasedOnState(isMenuOpen) {
  const mainHeadings = document.querySelectorAll(".mainHeading");
  mainHeadings.forEach((mainHeading) => {
    mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
  });
}

function CartLoginIcons() {
  const { getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  const [menuUserLogged, setMenuUserLogged] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  const handleRoutes = (route) => {
    navigate(route);
  };

  const handleUserIconClick = () => {
    if (!isPopupOpen) {
      setMenuUserLogged((prevState) => !prevState);
      setMainHeadingZIndexBasedOnState(!menuUserLogged);
    }
  };

  const handleCartIconClick = () => {
    if (totalAmount > 0) {
      handleRoutes("/cart");
    } else {
      setMenuUserLogged(false);
      setIsPopupOpen(true);
      setMainHeadingZIndexBasedOnState(true);
    }
  };

  return (
    <div className="carrinho-logar desktop">
      {isPopupOpen && <PopupCarrinhoVazio setIsPopupOpen={setIsPopupOpen} />}
      <div className="icones">
        <img src={SearchIcon} alt="Ícone de busca" />
        <img
          src={CartIcon}
          alt="Ícone de Carrinho"
          onClick={handleCartIconClick}
        />
        {user ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={PngUser}
              onClick={handleUserIconClick}
              alt="Ícone de Menu do Usuário"
            />
            <Dropdown isOpen={menuUserLogged}>
              <ul>
                <li onClick={() => handleRoutes("/profile")}>Meu Perfil</li>
                <li onClick={() => handleRoutes("/orders")}>Meus Pedidos</li>
                <li onClick={() => localStorage.removeItem('user')}>Sair</li>
              </ul>
            </Dropdown>
          </div>
        ) : (
          <img
            src={PngUser}
            onClick={() => handleRoutes("/login")}
            alt="Icone de Login"
          />
        )}
      </div>
    </div>
  );
}

export default CartLoginIcons;
