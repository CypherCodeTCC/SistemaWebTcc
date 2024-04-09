import bookImg from "../../../public/roxoapontandodireita.png";
import { Container } from "./destaques.jsx";

function DestaquesSection() {
  return (
    <Container className="container">
      <div className="title">
        <h1>Destaques</h1>
      </div>
      <div className="menu">
        <button className="button-menu">Livros</button>
        <button className="button-menu">Livros</button>
        <button className="button-menu">Livros</button>
        <button className="button-menu">Livros</button>
        <button className="button-menu">Livros</button>
      </div>

      <div className="container-cards">
        <div className="card card-left">
          <img
            src={bookImg}
            className="book-image big-image"
            alt="Livro roxo flutuando"
          />
          <h1>Hello World!</h1>
          <p>lorem</p>
        </div>
        <div className="main-container-right">
          <div className="card card-right">
            <img
              src={bookImg}
              className="book-image"
              alt="Livro roxo flutuando"
            />
            <h1>Hello World!</h1>
            <p>lorem</p>
          </div>
          <div className="card card-right">
            <img
              src={bookImg}
              className="book-image"
              alt="Livro roxo flutuando"
            />
            <h1>Hello World!</h1>
            <p>lorem</p>
          </div>
          <div className="card card-right">
            <img
              src={bookImg}
              className="book-image"
              alt="Livro roxo flutuando"
            />
            <h1>Hello World!</h1>
            <p>lorem</p>
          </div>
          <div className="card card-right">
            <img
              src={bookImg}
              className="book-image"
              alt="Livro roxo flutuando"
            />
            <h1>Hello World!</h1>
            <p>lorem</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default DestaquesSection;

/* imagem central a esquerda = 638px de width e height, as outras 4 a direita tem 293 de height e width, padding: 0vw 1.66666667vw 1.66666667vw 0vw;*/
