import { useState, useEffect } from "react";
import "../css/mobilemenu.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Função para buscar o mainHeading pela classe e setar o z-index para -1 quando o menu estiver aberto
function setMainHeadingZIndexBasedOnState(isMenuOpen) {
  const mainHeadings = document.querySelectorAll(".mainHeading");
  mainHeadings.forEach((mainHeading) => {
    mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
  });
}

// Componente para a tela ativada no clique
function ScreenOnClickMobile({ onClick }) {
  return (
    <div className="screen-on-click" onClick={onClick}>
      <h1>Tela ativada no clique</h1>
    </div>
  );
}

// Componente principal para o menu mobile
function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const userGoogle = localStorage.getItem("uId");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("uId");
    toast.info("Voce deslogou da sua conta.", {
      closeOnClick: true,
    });
    navigate("/");
  };

  // Função para lidar com o clique no ícone do menu
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efeito para atualizar o estado e adicionar/remover classe do body quando o menu é aberto/fechado
  useEffect(() => {
    setMainHeadingZIndexBasedOnState(isMenuOpen);
    document.body.classList.toggle("menu-open", isMenuOpen);

    // Remover classe do body ao desmontar o componente
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const renderUserSection = () => {
    if (userId) {
      return (
        <div>
          <li className="li-botoes-menumobile">
            <a
              onClick={() => navigate("/meuspagamentos")}
              className="a--li--menumobile"
            >
              Meus Pagamentos
            </a>
          </li>
          <li className="li-botoes-menumobile">
            <a
              onClick={() => navigate("/profile")}
              className="a--li--menumobile"
            >
              Meu Perfil
            </a>
          </li>
          <li className="li-botoes-menumobile">
            <a onClick={handleLogout} className="a--li--menumobile">
              Logout
            </a>
          </li>
        </div>
      );
    } else if (userGoogle) {
      return (
        <div>
          <li className="li-botoes-menumobile">
            <a
              onClick={() => navigate("/register")}
              className="a--li--menumobile"
            >
              Cadastrar informações
            </a>
          </li>
          <li className="li-botoes-menumobile">
            <a onClick={handleLogout} className="a--li--menumobile">
              Logout
            </a>
          </li>
        </div>
      );
    } else {
      return (
        <li className="li-botoes-menumobile">
          <a onClick={() => navigate("/login")} className="a--li--menumobile">
            Entrar
          </a>
        </li>
      );
    }
  };

  return (
    <div className="mobile-mobile">
      {isMenuOpen && <ScreenOnClickMobile onClick={handleClick} />}
      <div
        className={`wrapper-menu ${isMenuOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="line-menu half start"></div>
        <div className="line-menu"></div>
        <div className="line-menu half end"></div>
      </div>
      <div className={`fullscreen-menu ${isMenuOpen ? "open" : ""}`}>
        <section className="interior-menumobile">
          <ul
            className="interior-menumobile-menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <li className="li--menu">
              <a onClick={() => navigate("/")} className="li--a--menu">
                Home
              </a>
            </li>
            <li className="li--menu">
              <a onClick={() => navigate("/")} className="li--a--menu">
                Ofertas
              </a>
            </li>
            <li className="li--menu">
              <a onClick={() => navigate("/")} className="li--a--menu">
                Eventos
              </a>
            </li>
            <li className="li-botoes-menumobile">
              <a
                onClick={() => navigate("/cart")}
                className="a--li--menumobile"
              >
                Carrinho
              </a>
            </li>
            <div className="botoes-interior-menumobile">
              {renderUserSection()}
            </div>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MobileMenu;
