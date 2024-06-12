import { useNavigate } from "react-router-dom";

import { Footer } from "./footerStyle";

import PngGps from "../../../public/gps.png";
import PngEmail from "../../../public/email.png";
import PngTelefone from "../../../public/telefone.png";

export default function FooterBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  const handleRoutes = (route) => {
    navigate(route);
  };

  return (
    <>
      <Footer>
        <div className="container-aboutUs">
          <h4>Liber</h4>
          <p>
            aliquam ultrices sagittis orci a scelerisque purus semper eget duis
            at tellus at urna pellentesque id nibh
          </p>
          <button onClick={scrollToTop}>Retornar ao topo</button>
        </div>
        <div className="container-client">
          <h4>Ajuda ao cliente</h4>
          <div className="client">
            <img src={PngGps} alt="GPS" />
            <p>R. Guaipá, 678 - Vila Leopoldina</p>
          </div>
          <div className="client">
            <img src={PngEmail} alt="Email" />
            <p>email@gmail.com</p>
          </div>
          <div className="client">
            <img src={PngTelefone} alt="Telefone" />
            <p>+55 (11) 99999-9999</p>
          </div>
        </div>
        <div className="container-social-media">
          <h4>Redes Sociais</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>X</p>
          <p>TikTok</p>
        </div>
        <div className="container-know-more">
          <h4>Saiba Mais</h4>
          <p onClick={() => handleRoutes("/about")}>Quem somos</p>
          <p onClick={() => handleRoutes("/about")}>Trabalhe conosco</p>
          <p>Entre em contato</p>
        </div>
        <div className="container-payment">
          <h4>Pagamento</h4>
        </div>
        <div className="container-rights-reserved">
          <p>@ 2024 Liber | Todos os direitos reservados</p>
        </div>
      </Footer>
    </>
  );
}
