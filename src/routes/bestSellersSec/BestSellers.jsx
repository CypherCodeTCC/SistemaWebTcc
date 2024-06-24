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
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../loadingSec/Loading";

function AvaliacaoAleatoria() {
  return Math.floor(Math.random() * 2) + 4;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Avaliacoes({ avaliacao }) {
  const estrelas = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(avaliacao)) {
      estrelas.push(<FaStar key={i} color="black" />);
    } else if (i === Math.ceil(avaliacao)) {
      estrelas.push(<FaStarHalf key={i} color="black" />);
    } else {
      estrelas.push(<FaStar key={i} color="lightgray" />);
    }
  }

  return <AvaliacoesContainer>{estrelas}</AvaliacoesContainer>;
}

function Card({ id, imagem, name, price, avaliacoes }) {
  const navigate = useNavigate();

  const handleRoutes = (route) => {
    scrollToTop();
    navigate(route);
  };

  return (
    <CardContainer>
      <Imagem
        src={imagem}
        onClick={() => handleRoutes(`/produto/${id}`)}
      ></Imagem>
      <NomeLivro>{name}</NomeLivro>
      <Avaliacoes avaliacao={avaliacoes} />
      <PrecoLivro>R${price}</PrecoLivro>
    </CardContainer>
  );
}

export default function BestSellers() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "https://node-routes-mysql.vercel.app/book"
        );
        const bookWithRatings = res.data.slice(0, 8).map((book) => ({
          ...book,
          avaliacoes: AvaliacaoAleatoria(),
        }));
        // Ordena os livros pelos ratings em ordem decrescente
        const sortedBooks = bookWithRatings.sort(
          (a, b) => b.avaliacoes - a.avaliacoes
        );
        setBooks(sortedBooks);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <Container>
      <Titulo>Mais Vendidos</Titulo>
      {isLoading && <Loading />}
      <Fileira>
        {books.map((book) => (
          <Card
            key={book.id}
            imagem={book.image.url}
            id={book.id}
            name={book.name}
            price={book.price}
            avaliacoes={book.avaliacoes} // Supondo que a avaliação seja 4.2
          />
        ))}
      </Fileira>
    </Container>
  );
}
