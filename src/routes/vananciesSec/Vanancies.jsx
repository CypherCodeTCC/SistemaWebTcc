import { Container } from './vananciesStyle';

import pngContratando from '../../../public/contratando.png'

export default function Vanancies() {
    const handleButtonClick = () => {
        const defaultMessage = encodeURIComponent("Olá, estou interessado nas vagas de emprego.");
        window.open(`https://wa.me/11984847576?text=${defaultMessage}`, "_blank");
    };

    return (
        <>
            <Container>
                <div className="content-text">
                    <p>Home &gt; <span>Quem Somos</span></p>
                    <h1>Estamos contratando.</h1>
                    <h1>Veja se você se adequa aos cargos</h1>
                    <p>Entre em contato com nosso WhatsApp de atendimento.</p>
                    <button onClick={handleButtonClick}>Veja as Vagas -&gt;</button>
                </div>
                <div className="content-image">
                    <img src={pngContratando} alt="Homem com gravata"/>
                </div>
            </Container>
        </>
    );
}