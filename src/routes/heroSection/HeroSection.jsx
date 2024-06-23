import "./heroSection.css";
import image from "../../../public/azulDeitado.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <header className="mainHeading">
        <div className="mainHeading__content">
          <article className="mainHeading__text">
            <p className="mainHeading__preTitle">Diversidade</p>
            <h2 className="mainHeading__title">Opções Variadas</h2>
            <p className="mainHeading__description">
            Nossas opções são variadas e qualificadas 
            para atender a todos os gostos e necessidades.
            </p>
            <button className="cta" onClick={() => navigate("/produto/geral")}>
              Explorar opções
            </button>
          </article>

          <figure className="mainHeading__image">
            <img src={image} alt="Livro azul flutuante" />
          </figure>
        </div>
      </header>
    </>
  );
}

export default HeroSection;
