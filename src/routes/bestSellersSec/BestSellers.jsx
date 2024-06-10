import {
    CardContainer,
    Imagem,
    Avaliacoes as AvaliacoesContainer,
    Container,
    Titulo,
    Fileira,
    NomeLivro,
    PrecoLivro,
  
  } from "./bestSellers.style";
  
  //lib para enviar protocolos http para o servidor
  import axios from "axios";
  import { useEffect, useState } from "react";
  
  //Estrelas do ReactIcons
  import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
  
  function Avaliacoes({ avaliacao }) {
    const estrelas = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < avaliacao) {
        estrelas.push(<FaStar key={i} color="black" />);
      } else {
        estrelas.push(<FaStar key={i} color="lightgray" />);
      }
    }
  
    return <AvaliacoesContainer>{estrelas}</AvaliacoesContainer>;
  }
  
  function Card({ id, imagem, name, price, avaliacoes }) {
    const navigate = useNavigate();

    return (
      <CardContainer>
        <Imagem src={imagem} onClick={() => navigate(`/produto/${id}`)}></Imagem>
        <NomeLivro>{name}</NomeLivro>
        <Avaliacoes avaliacao={avaliacoes} />
        <PrecoLivro>R${price}</PrecoLivro>
      </CardContainer>
    );
  }
  
  export default function BestSellers() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      const fetchAllBooks = async () => {
        try {
          const res = await axios.get("https://node-routes-mysql.vercel.app/book");
          setBooks(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllBooks();
    }, []);
  
    return (
      <Container>
        <Titulo>Mais Vendidos</Titulo>
        <Fileira>
            {books.map((book) => (
              <Card
                key={book.id}
                imagem={book.image.url}
                id = {book.id}
                name={book.name}
                price={book.price}
                avaliacoes={4.2} // Supondo que a avaliação seja 4.2
              />
            ))}
        </Fileira>
      </Container>
    );
  }