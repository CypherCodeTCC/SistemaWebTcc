import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import {
  AuthorPublisherSection,
  BuyButton,
  Container,
  DiscountedPrice,
  ErrorMessage,
  FilterSection,
  Icon,
  MelanciaSonica,
  MenuContainer,
  MenuContent,
  MenuItem,
  MenuTitle,
  MoreInfoButton,
  ProductAuthor,
  ProductCard,
  ProductDetailsSection,
  ProductImage,
  ProductImageSection,
  ProductList,
  ProductName,
  ProductPrice,
  ProductPriceAndButtonsSection,
  ProductPublisher,
  ProductSynopsis,
  RadioButtonLabel,
  RadioContainer,
  Tab,
  TabsContainer,
} from "./AllProductPageStyle.jsx";
import { FaFilter } from "react-icons/fa";

const ProductPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  const [filtroGenero, setFiltroGenero] = useState("");
  const [filtroEditora, setFiltroEditora] = useState("");
  const [filtroPreco, setFiltroPreco] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [expandedGenre, setExpandedGenre] = useState(false);
  const [expandedPublisher, setExpandedPublisher] = useState(false);
  const [expandedPrice, setExpandedPrice] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);

    window.onload = () => {
      setProdutos([]);
      setErro(null);
      setFiltroGenero("");
      setFiltroEditora("");
      setFiltroPreco("");
      navigate("/produto/geral");
    };

    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const handleRadioChange = (e) => {
    // Atualiza o estado
    setFiltroGenero(e.target.value);

    // Atualiza a URL
    navigate(
      `?genero=${e.target.value}&editora=${filtroEditora}&preco=${filtroPreco}`
    );
  };

  const handlePublisherChange = (e) => {
    // Atualiza o estado
    setFiltroEditora(e.target.value);

    // Atualiza a URL
    navigate(
      `?genero=${filtroGenero}&editora=${e.target.value}&preco=${filtroPreco}`
    );
  };

  const handlePriceChange = (e) => {
    // Atualiza o estado
    setFiltroPreco(e.target.value);

    // Atualiza a URL
    navigate(
      `?genero=${filtroGenero}&editora=${filtroEditora}&preco=${e.target.value}`
    );
  };

  const toggleGenreMenu = () => {
    setExpandedGenre(!expandedGenre);
  };

  const togglePublisherMenu = () => {
    setExpandedPublisher(!expandedPublisher);
  };
  <Tab onClick={isMobile ? toggleMobileMenu : null}>
    <Icon>
      <FaFilter />
    </Icon>
    Filtros
  </Tab>;

  const togglePriceMenu = () => {
    setExpandedPrice(!expandedPrice);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const toggleMenu = (menuName, isOpen) => {
    switch (menuName) {
      case "genero":
        setExpandedGenre(isOpen);
        break;
      case "editora":
        setExpandedPublisher(isOpen);
        break;
      case "preco":
        setExpandedPrice(isOpen);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Obtém os parâmetros da URL
    const params = new URLSearchParams(location.search);
    const genero = params.get("genero");
    const editora = params.get("editora");
    const preco = params.get("preco");

    // Verifica se os valores estão presentes na URL e abre os menus correspondentes
    if (genero) {
      toggleMenu("genero", true);
      // Se o valor do gênero estiver presente, marque o RadioButton correspondente
      setFiltroGenero(genero);
    }
    if (editora) {
      toggleMenu("editora", true);
      // Se o valor da editora estiver presente, marque o RadioButton correspondente
      setFiltroEditora(editora);
    }
    if (preco) {
      toggleMenu("preco", true);
      // Se o valor do preço estiver presente, marque o RadioButton correspondente
      setFiltroPreco(preco);
    }

    axios.get("https://node-routes-mysql.vercel.app/book/").then((response) => {
      let produtosFiltrados = response.data;

      // Filtra os produtos com base no gênero
      if (genero) {
        produtosFiltrados = produtosFiltrados.filter(
          (produto) => produto.genre.name === genero
        );
      }

      // Filtra os produtos com base na editora
      if (editora) {
        produtosFiltrados = produtosFiltrados.filter(
          (produto) => produto.publishing_company.name === editora
        );
      }

      // Filtra os produtos com base no preço
      if (preco) {
        produtosFiltrados = produtosFiltrados.filter((produto) => {
          switch (preco) {
            case "10":
              return produto.price <= 10;
            case "50":
              return produto.price > 10 && produto.price <= 50;
            case "100":
              return produto.price > 50 && produto.price <= 100;
            case "*":
              return true; // Mostra todos os produtos
            case "plus100":
              return produto.price > 100; // Mostra apenas os produtos com preço > 100
            default:
              return false;
          }
        });
      }
      // Atualiza o estado dos produtos
      setProdutos(produtosFiltrados);
    });
  }, [location.search]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpeza do evento de escuta ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MelanciaSonica>
      <TabsContainer>
        <Tab onClick={isMobile ? toggleMobileMenu : null}>
          <Icon>
            <FaFilter />
          </Icon>
          Filtros
        </Tab>
        <Tab>
          Recomendado
          <Icon>▼</Icon>
        </Tab>
      </TabsContainer>
      <MenuContainer
        style={{
          minHeight: "700px",
          position: isMobileMenuOpen ? "fixed" : "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          zIndex: 1000,
          display: isMobileMenuOpen ? "block" : "none",
        }}
      >
        <Tab onClick={isMobile ? toggleMobileMenu : null}>
          <Icon>
            <FaFilter />
          </Icon>
          Filtros
        </Tab>
        <MenuContent expanded={expanded}>
          <FilterSection>
            <MenuItem onClick={toggleGenreMenu}>
              <MenuTitle>Gênero</MenuTitle>
              <span>{expandedGenre ? "-" : "+"}</span>
            </MenuItem>
            {expandedGenre && (
              <RadioContainer>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="Suspense"
                    name="genero"
                    onChange={handleRadioChange}
                    checked={filtroGenero === "Suspense"}
                  />{" "}
                  Suspense
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="Terror"
                    name="genero"
                    onChange={handleRadioChange}
                    checked={filtroGenero === "Terror"}
                  />{" "}
                  Terror
                </RadioButtonLabel>
              </RadioContainer>
            )}
            <MenuItem onClick={togglePublisherMenu}>
              <MenuTitle>Editora</MenuTitle>
              <span>{expandedPublisher ? "-" : "+"}</span>
            </MenuItem>
            {expandedPublisher && (
              <RadioContainer>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="rocco"
                    name="editora"
                    onChange={handlePublisherChange}
                    checked={filtroEditora === "rocco"} // Verifica se o filtroEditora é 'rocco'
                  />{" "}
                  Rocco
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="Editora Wish"
                    name="editora"
                    onChange={handlePublisherChange}
                    checked={filtroEditora === "Editora Wish"} // Verifica se o filtroEditora é 'Wish'
                  />{" "}
                  Wish
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="Companhia das Letras"
                    name="editora"
                    onChange={handlePublisherChange}
                    checked={filtroEditora === "Companhia das Letras"} // Verifica se o filtroEditora é 'Companhia das Letras'
                  />{" "}
                  Companhia das Letras
                </RadioButtonLabel>
              </RadioContainer>
            )}
            <MenuItem onClick={togglePriceMenu}>
              <MenuTitle>Preço</MenuTitle>
              <span>{expandedPublisher ? "-" : "+"}</span>
            </MenuItem>
            {expandedPrice && (
              <RadioContainer>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="*"
                    name="preco"
                    onChange={handlePriceChange}
                    checked={filtroPreco === "*"} // Verifica se o filtroPreco é '*'
                  />{" "}
                  Qualquer
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="10"
                    name="preco"
                    onChange={handlePriceChange}
                    checked={filtroPreco === "10"} // Verifica se o filtroPreco é '10'
                  />{" "}
                  Até R$10
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="50"
                    name="preco"
                    onChange={handlePriceChange}
                    checked={filtroPreco === "50"} // Verifica se o filtroPreco é '50'
                  />{" "}
                  R$10 até R$50
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="100"
                    name="preco"
                    onChange={handlePriceChange}
                    checked={filtroPreco === "100"} // Verifica se o filtroPreco é '100'
                  />{" "}
                  R$50 até R$100
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="plus100"
                    name="preco"
                    onChange={handlePriceChange}
                    checked={filtroPreco === "plus100"} // Verifica se o filtroPreco é 'plus100'
                  />{" "}
                  Mais que R$100
                </RadioButtonLabel>
              </RadioContainer>
            )}
          </FilterSection>
        </MenuContent>
      </MenuContainer>
      <Container>
        <MenuContainer
          style={{
            minHeight: "700px",
          }}
        >
          <MenuContent expanded={expanded}>
            <FilterSection>
              <MenuItem onClick={toggleGenreMenu}>
                <MenuTitle>Gênero</MenuTitle>
                <span>{expandedGenre ? "-" : "+"}</span>
              </MenuItem>
              {expandedGenre && (
                <RadioContainer>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="Suspense"
                      name="genero"
                      onChange={handleRadioChange}
                      checked={filtroGenero === "Suspense"}
                    />{" "}
                    Suspense
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="Terror"
                      name="genero"
                      onChange={handleRadioChange}
                      checked={filtroGenero === "Terror"}
                    />{" "}
                    Terror
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="Romance"
                      name="genero"
                      onChange={handleRadioChange}
                      checked={filtroGenero === "Romance"}
                    />{" "}
                    Romance
                  </RadioButtonLabel>
                </RadioContainer>
              )}
              <MenuItem onClick={togglePublisherMenu}>
                <MenuTitle>Editora</MenuTitle>
                <span>{expandedPublisher ? "-" : "+"}</span>
              </MenuItem>
              {expandedPublisher && (
                <RadioContainer>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="Editora Rocco"
                      name="editora"
                      onChange={handlePublisherChange}
                      checked={filtroEditora === "rocco"} // Verifica se o filtroEditora é 'rocco'
                    />{" "}
                    Rocco
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="Editora Wish"
                      name="editora"
                      onChange={handlePublisherChange}
                      checked={filtroEditora === "Editora Wish"} // Verifica se o filtroEditora é 'Wish'
                    />{" "}
                    Wish
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="Companhia das Letras"
                      name="editora"
                      onChange={handlePublisherChange}
                      checked={filtroEditora === "Companhia das Letras"} // Verifica se o filtroEditora é 'Companhia das Letras'
                    />{" "}
                    CDL
                  </RadioButtonLabel>
                </RadioContainer>
              )}
              <MenuItem onClick={togglePriceMenu}>
                <MenuTitle>Preço</MenuTitle>
                <span>{expandedPublisher ? "-" : "+"}</span>
              </MenuItem>
              {expandedPrice && (
                <RadioContainer>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="*"
                      name="preco"
                      onChange={handlePriceChange}
                      checked={filtroPreco === "*"} // Verifica se o filtroPreco é '*'
                    />{" "}
                    Qualquer
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="10"
                      name="preco"
                      onChange={handlePriceChange}
                      checked={filtroPreco === "10"} // Verifica se o filtroPreco é '10'
                    />{" "}
                    Até R$10
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="50"
                      name="preco"
                      onChange={handlePriceChange}
                      checked={filtroPreco === "50"} // Verifica se o filtroPreco é '50'
                    />{" "}
                    R$10 até R$50
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="100"
                      name="preco"
                      onChange={handlePriceChange}
                      checked={filtroPreco === "100"} // Verifica se o filtroPreco é '100'
                    />{" "}
                    R$50 até R$100
                  </RadioButtonLabel>
                  <RadioButtonLabel>
                    <input
                      type="radio"
                      value="plus100"
                      name="preco"
                      onChange={handlePriceChange}
                      checked={filtroPreco === "plus100"} // Verifica se o filtroPreco é 'plus100'
                    />{" "}
                    Mais que R$100
                  </RadioButtonLabel>
                </RadioContainer>
              )}
            </FilterSection>
          </MenuContent>
        </MenuContainer>
        <ProductList>
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <ProductCard key={produto.id}>
                <ProductImageSection>
                  <ProductImage
                    src={produto.image.url}
                    alt={`Capa do livro ${produto.name}`}
                  />
                </ProductImageSection>

                <ProductDetailsSection>
                  <ProductName>{produto.name}</ProductName>
                  <ProductSynopsis>{produto.synopsis}</ProductSynopsis>
                  <AuthorPublisherSection>
                    <ProductAuthor>Autor: {produto.author.name}</ProductAuthor>
                    <ProductPublisher>
                      Editora:{" "}
                      {capitalizeFirstLetter(produto.publishing_company.name)}
                    </ProductPublisher>
                  </AuthorPublisherSection>
                </ProductDetailsSection>

                <ProductPriceAndButtonsSection>
                  <ProductPrice>R$ {produto.price}</ProductPrice>
                  <DiscountedPrice>
                    R$ {produto.price - ((produto.price * 10) / 100).toFixed(2)}{" "}
                    <span style={{ color: "#b8b8b8", fontSize: ".80vw" }}>
                      à vista
                    </span>{" "}
                  </DiscountedPrice>
                  <BuyButton onClick={() => addToCart(produto.id)}>
                    Comprar agora
                  </BuyButton>
                  <MoreInfoButton
                    onClick={() => navigate(`/produto/${produto.id}`)}
                  >
                    Saiba mais
                  </MoreInfoButton>
                </ProductPriceAndButtonsSection>
              </ProductCard>
            ))
          ) : (
            <ErrorMessage>
              Nenhum produto encontrado para os filtros aplicados.
            </ErrorMessage>
          )}
        </ProductList>
      </Container>
    </MelanciaSonica>
  );
};

export default ProductPage;
