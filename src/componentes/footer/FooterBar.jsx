import { useNavigate } from "react-router-dom";

import { Footer, Payment } from "./footerStyle";

import PngGps from "../../../public/gps.png";
import PngEmail from "../../../public/email.png";
import PngTelefone from "../../../public/telefone.png";
import PngMasterCard from "../../../public/mastercard.png";
import PngVisa from "../../../public/visa.png";
import PngPayPal from "../../../public/paypal.png";
import PngApplePay from "../../../public/applePay.png";
import PngGooglePay from "../../../public/googlePay.png";
import PngAmazon from "../../../public/amazon.png";

export default function FooterBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  const handleRoutes = (route) => {
    scrollToTop();
    navigate(route);
  };

  return (
    <>
      <Footer>
        <div className="container-aboutUs">
          <h4>Liber</h4>
          <p>
            Somos uma livraria, que busca sempre trazer os melhores livros do
            mercado!
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
          <p>
            <a
              href="https://www.instagram.com/liberlivrariaoficial/?utm_source=qr&igsh=MWRodW1xMTd1eXA0dA%3D%3D"
              target="_blank"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=61560973754056&is_tour_dismissed"
              target="_blank"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://x.com/Liber5017717167?t=71rOSDv7gmiwi_mOu_-0ZQ&s=08"
              target="_blank"
            >
              X
            </a>
          </p>
          <p>
            <a
              href="https://www.tiktok.com/@livrarialiber?_t=8nAgvQUPdHq&_r=1"
              target="_blank"
            >
              TikTok
            </a>
          </p>
        </div>
        <div className="container-know-more">
          <h4>Saiba Mais</h4>
          <p onClick={() => handleRoutes("/about")}>Quem somos</p>
          <p onClick={() => handleRoutes("/about")}>Trabalhe conosco</p>
          <p onClick={() => handleRoutes("/about")}>Entre em contato</p>
        </div>
        <div className="container-payment">
          <h4>Formas de Pagamento</h4>
          <Payment>
            <img src={PngMasterCard} alt="" />
            <img src={PngVisa} alt="" />
          </Payment>
          <Payment>
            <img src={PngPayPal} alt="" />
            <img src={PngApplePay} alt="" />
          </Payment>
          <Payment>
            <img src={PngGooglePay} alt="" />
            <img src={PngAmazon} alt="" />
          </Payment>
        </div>
        <div className="container-rights-reserved">
          <p>@ 2024 Liber | Todos os direitos reservados</p>
        </div>
      </Footer>
    </>
  );
}
