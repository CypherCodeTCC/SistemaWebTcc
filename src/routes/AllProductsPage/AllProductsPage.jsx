import { useState, useEffect } from "react";
import axios from "axios";
import {
  AuthorPublisherSection,
  BuyButton,
  Container,
  DiscountedPrice,
  ErrorMessage,
  FilterSection,
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
} from "./AllProductPageStyle.jsx";

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

  const toggleGenreMenu = () => {
    setExpandedGenre(!expandedGenre);
  };

  const togglePublisherMenu = () => {
    setExpandedPublisher(!expandedPublisher);
  };

  const togglePriceMenu = () => {
    setExpandedPrice(!expandedPrice);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    axios
      .get("https://node-routes-mysql.vercel.app/book/")
      .then((response) => {
        let produtosFiltrados = response.data;
        if (filtroGenero) {
          produtosFiltrados = produtosFiltrados.filter(
            (produto) => produto.genre.name === filtroGenero
          );
        }
        if (filtroEditora) {
          produtosFiltrados = produtosFiltrados.filter(
            (produto) => produto.publishing_company.name === filtroEditora
          );
        }
        if (filtroPreco) {
          produtosFiltrados = produtosFiltrados.filter((produto) => {
            switch (filtroPreco) {
              case "10":
                return produto.price <= 10;
              case "50":
                return produto.price > 10 && produto.price <= 50;
              case "100":
                return produto.price > 50 && produto.price <= 100;
              default:
                return produto.price > 100;
            }
          });
        }
        setProdutos(produtosFiltrados);
      })
      .catch((error) => {
        setErro("Erro ao buscar produtos");
      });
  }, [filtroGenero, filtroEditora, filtroPreco]);

  return (
    <Container>
      <MenuContainer style={{ minHeight: "700px" }}>
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
                    onChange={(e) => setFiltroGenero(e.target.value)}
                  />{" "}
                  Suspense
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="Terror"
                    name="genero"
                    onChange={(e) => setFiltroGenero(e.target.value)}
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
                    onChange={(e) => setFiltroEditora(e.target.value)}
                  />{" "}
                  Rocco
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="Wish"
                    name="editora"
                    onChange={(e) => setFiltroEditora(e.target.value)}
                  />{" "}
                  Wish
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="CDL"
                    name="editora"
                    onChange={(e) => setFiltroEditora(e.target.value)}
                  />{" "}
                  CDL
                </RadioButtonLabel>
              </RadioContainer>
            )}
            <MenuItem onClick={togglePriceMenu}>
              <MenuTitle>Preço</MenuTitle>
              <span>{expandedPrice ? "-" : "+"}</span>
            </MenuItem>
            {expandedPrice && (
              <RadioContainer>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value=""
                    name="preco"
                    onChange={(e) => setFiltroPreco(e.target.value)}
                  />{" "}
                  Qualquer
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="10"
                    name="preco"
                    onChange={(e) => setFiltroPreco(e.target.value)}
                  />{" "}
                  Até R$10
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="50"
                    name="preco"
                    onChange={(e) => setFiltroPreco(e.target.value)}
                  />{" "}
                  R$10 até R$50
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="100"
                    name="preco"
                    onChange={(e) => setFiltroPreco(e.target.value)}
                  />{" "}
                  R$50 até R$100
                </RadioButtonLabel>
                <RadioButtonLabel>
                  <input
                    type="radio"
                    value="mais"
                    name="preco"
                    onChange={(e) => setFiltroPreco(e.target.value)}
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
                  R$ {produto.price - (produto.price * 10) / 100}{" "}
                  <span style={{ color: "#b8b8b8", fontSize: ".80vw" }}>
                    à vista
                  </span>{" "}
                </DiscountedPrice>
                <BuyButton>Comprar agora</BuyButton>
                <MoreInfoButton>Saiba mais</MoreInfoButton>
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
  );
};

export default ProductPage;
