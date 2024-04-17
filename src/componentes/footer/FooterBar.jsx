import { Footer } from './footerStyle';

export default function FooterBar(){
    return(
        <>
            <Footer>
                <div className="container-aboutUs">
                    <h4>Liber</h4>
                    <p>aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna pellentesque id nibh</p>
                    <button>Retornar ao topo</button>
                </div>
                <div className="container-client">
                    <h4>Ajuda ao cliente</h4>
                    <p>R. Guaipá, 678 - Vila Leopoldina</p>
                    <p>email@gmail.com</p>
                    <p>+55 (11) 99999-9999</p>
                </div>
                <div className="container-social-media">
                    <h4>Rede Sociais</h4>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>X</p>
                    <p>TikTok</p>
                </div>
                <div className="container-know-more">
                    <h4>Saiba Mais</h4>
                    <p>Quem somos</p>
                    <p>Trabalhe conosco</p>
                    <p>Entre em contato</p>
                </div>
                <div className="container-payment">
                    <h4>Pagamento</h4>
                </div>
                <div className='container-rights-reserved'>
                    <p>@ 2024 Liber | Todos os direitos reservados</p>
                </div>
            </Footer>
        </>
    );
}