import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  MenuContainer,
  Button,
  Option,
  CardsContainer,
  Card,
  Imagem,
  CardTitle,
  Fileira,
  CardsSecundarios,
} from "./destaques.jsx";
import Loading from "../loadingSec/Loading.jsx";

function DestaquesSection() {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [lastClickedButton, setLastClickedButton] = useState(1);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRoutes = (route) => {
    scrollToTop();
    navigate(route);
  };

  async function fetchBooks() {
    try {
      setIsLoading(true);
      const res = await axios.get("https://node-routes-mysql.vercel.app/book");
      const filteredBooks = res.data.filter(
        (book) =>
          book.genre.name === "Suspense" || book.genre.name === "Romance"
      );
      setBooks(filteredBooks);
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleButtonClick(buttonId) {
    let genre = null;
    switch (buttonId) {
      case 1:
        genre = null; // "Todos os Livros"
        break;
      case 2:
        genre = "Romance";
        break;
      case 3:
        genre = "Suspense";
        break;
      default:
        break;
    }
    setSelectedGenre(genre);
    setLastClickedButton(buttonId);
  }

  const filteredBooks =
    selectedGenre !== null
      ? books.filter(
          (book) => selectedGenre === null || book.genre.name === selectedGenre
        )
      : books;

  const otherBooks = filteredBooks;

  return (
    <Container>
      <Title>Destaques</Title>
      <MenuContainer>
        {[1, 2, 3].map((item) => (
          <Button
            key={item}
            onClick={() => handleButtonClick(item)}
            style={{
              backgroundColor: lastClickedButton === item ? "black" : "",
              color: lastClickedButton === item ? "white" : "",
            }}
          >
            <Option>
              {item === 1
                ? "Todos os Livros"
                : item === 2
                ? "Romance"
                : "Suspense"}
            </Option>
          </Button>
        ))}
      </MenuContainer>
      <CardsContainer>
        {isLoading && <Loading />}
        <CardsSecundarios>
          {[1].map((row) => (
            <Fileira key={row}>
              {otherBooks.map((book, index) => (
                <Card
                  key={index}
                  onClick={() => handleRoutes(`/produto/${book.id}`)}
                >
                  {book.image && <Imagem src={book.image.url} />}
                  <CardTitle>{book.name}</CardTitle>
                </Card>
              ))}
            </Fileira>
          ))}
        </CardsSecundarios>
      </CardsContainer>
    </Container>
  );
}

export default DestaquesSection;
