import { styled } from "styled-components";

// Container principal
export const Container = styled.div`
  display: flex;
  text-align: center;
  margin: 24px 60px 20px 200px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 1440px) {
    min-width: 150px;
    margin: 12px 30px 10px 100px;
  }
`;

// Estilização dos filtros e recomendados
export const TabsContainer = styled.div`
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
`;

export const Tab = styled.button`
  flex: 1;
  border: none;
  background: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.span`
  margin-right: 5px;
`;
// Menu colapsável
export const MenuContainer = styled.div`
  padding: 16px;
  margin-right: 1rem;
  transition: transform 0.3s ease-in-out;

  &.expanded .MenuContent {
    transform: translateY(0);
  }

  &.collapsed .MenuContent {
    transform: translateY(-100%);
  }

  @media (max-width: 1440px) {
    padding: 0.5%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1.2px solid #6d6d6d6c;

  @media (max-width: 1440px) {
    padding: 0.5%;
  }
`;

export const MenuTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 4.4rem 0.4rem 0;

  @media (max-width: 1440px) {
    padding: 0.8rem 2.2rem 0.2rem 0;
  }
`;

export const MenuContent = styled.div`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

// Seção de Filtros
export const FilterSection = styled.section`
  display: grid;
  margin: 20px 0px;
  width: 100%;

  @media (max-width: 1440px) {
    width: 150px;
  }
`;

export const RadioContainer = styled.div`
  display: grid;
  margin: 20px 0;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

export const RadioButtonLabel = styled.label`
  display: flex;
  margin: 0px;
  font-weight: 400;
  color: #000;
  list-style: outside none none;

  input[type="radio"] {
    margin-right: 8px;
    background-color: #f0f0f0;
    transition: 0.2s all linear;
    border: none;
    cursor: pointer;
    width: 1.2rem;
    height: auto;
    vertical-align: middle;

    &:checked {
      background-color: #0e0e0e;
      border: 1.2px dashed #020200;
    }
  }
`;

// Lista de Produtos
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f8f4f4;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  @media (max-width: 425px) {
    margin: 0;
  }
`;

// Card do produto
export const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  width: 100%;
  height: 36vh;
  box-shadow: 10px 10px 30px #f2f2f2, -10px -10px 30px #ffffff;
  background: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 425px) {
    width: 300px;
    padding: 36px;
    margin: 0;
  }
`;

// Nome do produto
export const ProductName = styled.h1`
  margin-bottom: 20px;
  font-size: 1.6vw;

  @media (max-width: 1440px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    margin: 20px 0px 0px 20px;
  }
`;

// Sinopse
export const ProductSynopsis = styled.p`
  max-width: calc(80% - 1px);
  height: 400px;
  overflow-wrap: break-word;
  margin-top: 20px;
  text-align: justify;
  font-size: 125%;


  @media (max-width: 1024px) {
    font-size: 95%;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 20px;

  }
`;

// Autor....  \\ 
export const ProductAuthor = styled.span`
  margin-top: 30px;
  margin-right: 1.6vw;
  font-size: 125%;

  @media (max-width: 1024px) {
    margin-right: 20px;
    font-size: 16px;
  }
`;

// Editora
export const ProductPublisher = styled.span`
  margin-top: 30px;
  font-size: 125%;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

// Seção da Imagem
export const ProductImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  max-width: 50%;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 75%;
  }
  @media (max-width: 768px) {
     
  }
`;

export const ProductDetailsSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

// Seção de Preço e Botões
export const ProductPriceAndButtonsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 1.2px solid #c0c0c0;
  padding-left: 12px;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Seção de Autor e Editora
export const AuthorPublisherSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  text-decoration: line-through;
  color: #505050;
`;

export const DiscountedPrice = styled.p`
  font-size: 22px;
  color: #333;
  border-radius: 5px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: auto;
  border-radius: 24px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export const MoreInfoButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: white;
  color: black;
  border: 1px solid black;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 24px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Mensagem de Erro
export const ErrorMessage = styled.div`
  color: #000000;
  background-color: #ffe6e6;
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  font-weight: bold;
`;

// Seçao de estilizaçao mobile
export const MobileMenu = styled.div`

`

export const MelanciaSonica = styled.div`
  display: grid;
`