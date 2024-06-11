import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  text-align: center;
`;

const FilterSection = styled.section`
  margin: 20px 0;
`;

const RadioButtonLabel = styled.label`
  margin: 0 10px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 20px;
  width: 300px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  color: #333;
`;

const ProductSynopsis = styled.p`
  color: #666;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const ProductAuthor = styled.p`
  color: #0077cc;
`;

const ProductPublisher = styled.p`
  color: #ff6600;
`;

const ErrorMessage = styled.div`
  color: red;
`;

// Component
const ProductPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  const [filtroGenero, setFiltroGenero] = useState('');
  const [filtroEditora, setFiltroEditora] = useState('');

  useEffect(() => {
    axios.get('https://node-routes-mysql.vercel.app/book/')
      .then(response => {
        let produtosFiltrados = response.data;
        if (filtroGenero) {
          produtosFiltrados = produtosFiltrados.filter(produto => produto.genre.name === filtroGenero);
        }
        if (filtroEditora) {
          produtosFiltrados = produtosFiltrados.filter(produto => produto.publishing_company.name === filtroEditora);
        }
        setProdutos(produtosFiltrados);
      })
      .catch(error => {
        setErro('Erro ao buscar produtos');
      });
  }, [filtroGenero, filtroEditora]);

  if (erro) {
    return <ErrorMessage>{erro}</ErrorMessage>;
  }

  return (
    <Container>
      <FilterSection>
        <RadioButtonLabel>
          <input type="radio" value="Suspense" name="genero" onChange={(e) => setFiltroGenero(e.target.value)} /> Suspense
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input type="radio" value="Terror" name="genero" onChange={(e) => setFiltroGenero(e.target.value)} /> Terror
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input type="radio" value="rocco" name="editora" onChange={(e) => setFiltroEditora(e.target.value)} /> Rocco
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input type="radio" value="Wish" name="editora" onChange={(e) => setFiltroEditora(e.target.value)} /> Wish
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input type="radio" value="CDL" name="editora" onChange={(e) => setFiltroEditora(e.target.value)} /> CDL
        </RadioButtonLabel>
      </FilterSection>

      <ProductList>
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <ProductCard key={produto.id}>
              <ProductName>{produto.name}</ProductName>
              <ProductImage src={produto.image.url} alt={`Capa do livro ${produto.name}`} />
              <ProductSynopsis>{produto.synopsis}</ProductSynopsis>
              <ProductPrice>Preço: R$ {produto.price}</ProductPrice>
              <ProductAuthor>Autor: {produto.author.name}</ProductAuthor>
              <ProductPublisher>Editora: {produto.publishing_company.name}</ProductPublisher>
            </ProductCard>
          ))
        ) : (
          <ErrorMessage>Nenhum produto encontrado para os filtros aplicados.</ErrorMessage>
        )}
      </ProductList>
    </Container>
  );
};

export default ProductPage;


