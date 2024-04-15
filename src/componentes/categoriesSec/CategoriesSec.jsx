import bookImg from '../../../public/roxoapontandodireita.png';
import { Container } from "./categories";

export default function BooksSection() {
  return (
    <Container>
      <div className="card card-left">
        <h1>Desenvolvimento Pessoal</h1>
        <p>Compre Agora</p>
        <img src={bookImg} className="book-image big-image" alt="Livro Roxo Flutuando" />
      </div>
      <div className="main-container-right">
        <div className="card card-right">
          <img src={bookImg} className="book-image" alt="Livro Roxo Flutuando" />
          <h1>Clássicos</h1>
          <p>Compre Agora</p>
        </div>
        <div className="card card-right">
          <img src={bookImg} className="book-image" alt="Livro Roxo Flutuando" />
          <h1>Geek</h1>
          <p>Compre Agora</p>
        </div>
      </div>
    </Container>
  );
}
