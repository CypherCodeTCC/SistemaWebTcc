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
  
  function Card({ imagem, nome, preco, avaliacoes }) {
    return (
      <CardContainer>
        <Imagem src={imagem}></Imagem>
        <NomeLivro>{nome}</NomeLivro>
        <Avaliacoes avaliacao={avaliacoes} />
        <PrecoLivro>R${preco}</PrecoLivro>
      </CardContainer>
    );
  }
  
  export default function BestSellers() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      const fetchAllBooks = async () => {
        try {
          const res = await axios.get("http://localhost:8081/books");
          setBooks(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllBooks();
    }, []);
  
    console.log(books);
  
    return (
      <Container>
        <Titulo>Mais Vendidos</Titulo>
        <Fileira>
            {books.map((book) => (
              <Card
                key={book.id}
                imagem="/azulDeitado.png"
                nome={book.Nome}
                preco={book.Preco}
                avaliacoes={4.2} // Supondo que a avaliação seja 4.2
              />
            ))}
        </Fileira>
      </Container>
    );
  }