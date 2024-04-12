import {Container} from "./cardsStyle"

export default function Cards(){
    return(
        <>
            <Container>
                <div className="cards">    
                    <h2>Entrega Grátis</h2>
                    <p>Pedidos acima de R$ 200,00</p>
                </div>
                <div className="cards">
                    <h2>Dinheiro de Volta</h2>
                    <p>Garantia de 30 dias</p>
                </div>
                <div className="cards">
                    <h2>Pagamento Seguro</h2>
                    <p>Certificado pela Visa</p>
                </div>
                <div className="cards">
                    <h2>Atendimento 24/7</h2>
                    <p>Suporte por telefone</p>
                </div>
            </Container>
        </>
    );
}