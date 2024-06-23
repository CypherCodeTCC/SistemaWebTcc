import { useState, useContext, useEffect } from "react";
import CartIcon from "../../../../public/carrinho.svg";
import SearchIcon from "../../../../public/search.svg";
import PngUser from "../../../../public/user.png";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../context/cart/CartContext";
import { toast } from "react-toastify";
import axios from "axios";

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

function Search({ isOpen, children }) {
  return (
    <div className={`dropdownInput ${isOpen ? "show" : ""}`}>{children}</div>
  );
}

function setMainHeadingZIndexBasedOnState(isMenuOpen) {
  const mainHeadings = document.querySelectorAll(".mainHeading");
  mainHeadings.forEach((mainHeading) => {
    mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
  });
}

function CartLoginIcons() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  const [menuUserLogged, setMenuUserLogged] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState({
    title: "",
  });

  const userId = localStorage.getItem("userId");
  const userGoogle = localStorage.getItem("uId");

  const navigate = useNavigate();

  const handleRoutes = (route) => {
    navigate(route);
  };

  const handleSearchClick = () => {
    if (!isPopupOpen) {
      setSearch((prevState) => !prevState);
      setMainHeadingZIndexBasedOnState(!search);
      setMenuUserLogged(false);
    }
  };

  const handleUserIconClick = () => {
    if (!isPopupOpen) {
      setMenuUserLogged((prevState) => !prevState);
      setMainHeadingZIndexBasedOnState(!menuUserLogged);
      setSearch(false);
    }
  };

  const handleCartIconClick = () => {
    if (totalAmount > 0) {
      handleRoutes("/cart");
    } else {
      setMenuUserLogged(false);
      setSearch(false);
      setIsPopupOpen(true);
      setMainHeadingZIndexBasedOnState(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("uId");
    toast.info("Voce deslogou da sua conta.", {
      closeOnClick: true,
    });
    handleRoutes("/");
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "https://node-routes-mysql.vercel.app/book"
        );
        setBooks(res.data);
      } catch (err) {
        console.log("Erro ao encontrar os livros.", err);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    if (input.title) {
      const filtered = books.filter((book) =>
        book.name.toLowerCase().includes(input.title.toLowerCase())
      );
      if (filtered.length > 0) {
        setFilteredBooks(filtered.slice(0, 8));
      } else {
        setFilteredBooks([{ id: 0, name: "Nenhum resultado encontrado." }]);
      }
    } else {
      setFilteredBooks([]);
    }
  }, [input, books]);

  const handleBookClick = (bookId) => {
    navigate(`/produto/${bookId}`);
    setSearch(false); // Fechar o menu de busca após clicar em um livro
    setMainHeadingZIndexBasedOnState(false);
  };

  const renderUserSection = () => {
    if (userId) {
      return (
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
            className="pngUser"
            onClick={handleUserIconClick}
            alt="Ícone de Menu do Usuário"
          />
          <Dropdown isOpen={menuUserLogged}>
            <ul>
              <li onClick={() => handleRoutes(`/profile`)}>Meu Perfil</li>
              <li onClick={handleLogout}>Sair</li>
            </ul>
          </Dropdown>
        </div>
      );
    } else if (userGoogle) {
      return (
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
            className="pngUser"
            onClick={handleUserIconClick}
            alt="Ícone de Menu do Usuário"
          />
          <Dropdown isOpen={menuUserLogged}>
            <ul>
              <li onClick={() => handleRoutes("/register")}>
                Cadastrar informações
              </li>
              <li onClick={handleLogout}>Sair</li>
            </ul>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <img
          src={PngUser}
          className="pngUser"
          onClick={() => handleRoutes("/login")}
          alt="Icone de Login"
        />
      );
    }
  };

  return (
    <div className="carrinho-logar desktop">
      {isPopupOpen && <PopupCarrinhoVazio setIsPopupOpen={setIsPopupOpen} />}
      <div className="icones">
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
            src={SearchIcon}
            alt="Ícone de busca"
            onClick={handleSearchClick}
          />
          <Search isOpen={search}>
            <input
              type="text"
              placeholder="Faça sua busca..."
              onChange={handleChange}
              name="title"
            />
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => handleBookClick(book.id)}
              >
                {book.id !== 0 ? (
                  <div className="container-search">
                    <div className="align-image-title">
                      {book.image && (
                        <img src={book.image.url} alt="Imagem do Produto" />
                      )}
                      <p>{book.name}</p>
                    </div>
                    <p>R${book.price.toFixed(2)}</p>
                  </div>
                ) : (
                  <div className="container-search">
                      <p>{book.name}</p>
                  </div>
                )}
              </div>
            ))}
          </Search>
        </div>

        <img
          src={CartIcon}
          alt="Ícone de Carrinho"
          onClick={handleCartIconClick}
        />
        {renderUserSection()}
      </div>
    </div>
  );
}

export default CartLoginIcons;
