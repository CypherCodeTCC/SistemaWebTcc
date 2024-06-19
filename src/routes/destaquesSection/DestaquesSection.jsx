import React, { useState, useEffect } from "react";
import axios from "axios";
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

function DestaquesSection() {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [lastClickedButton, setLastClickedButton] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const res = await axios.get("https://node-routes-mysql.vercel.app/book");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  }

  function handleButtonClick(buttonId) {
    let genre = null;
    switch (buttonId) {
      case 1:
        genre = "Suspense";
        break;
      case 2:
        genre = "Romance";
        break;
      case 3:
        genre = null; // "Todos os Livros"
        break;
      default:
        break;
    }
    setSelectedGenre(genre);
    setLastClickedButton(buttonId);
  }

  const filteredBooks = selectedGenre !== null
    ? books.filter((book) => selectedGenre === null || book.genre.name === selectedGenre)
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
              {item === 1 ? "Suspense" : item === 2 ? "Romance" : "Todos os Livros"}
            </Option>
          </Button>
        ))}
      </MenuContainer>
      <CardsContainer>
        <CardsSecundarios>
          {[1].map((row) => (
            <Fileira key={row}>
              {otherBooks.map((book, index) => (
                <Card key={index}>
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