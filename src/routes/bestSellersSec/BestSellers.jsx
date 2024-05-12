import { 
    CardContainer,
    Imagem,
    Avaliacoes as AvaliacoesContainer,
    NomeLivro,
    NomeAutor,
    PrecoLivro,
    Container,
    Titulo,
    Fileira
} from './bestSellers.style'

//Estrelas do ReactIcons
import { FaStar } from 'react-icons/fa';

function Avaliacoes({ avaliacao }) {
    const estrelas = [];

    for (let i = 0; i < 5; i++) {
        if (i < avaliacao) {
            estrelas.push(<FaStar key={i} color="black" />);
        } else {
            estrelas.push(<FaStar key={i} color="lightgray" />);
        }
    }

    return <AvaliacoesContainer>{estrelas}</AvaliacoesContainer>;
}

function Card({imagem, avaliacoes, nomeLivro, nomeAutor, precoLivro}) {
    return (
        <CardContainer>
            <Imagem src={imagem}></Imagem>
            <Avaliacoes avaliacao={avaliacoes} />
            <NomeLivro>{nomeLivro}</NomeLivro>
            <NomeAutor>{nomeAutor}</NomeAutor>
            <PrecoLivro>{precoLivro}</PrecoLivro>
        </CardContainer>
    );
}

export default function BestSellers () {
    return (
        <Container>
            <Titulo>Mais Vendidos</Titulo>
            <Fileira>
                <Card imagem="/azulDeitado.png" avaliacoes={4} nomeLivro="Livro 1" nomeAutor="Autor 1" precoLivro="R$999.99" />
                <Card imagem="/azulDeitado.png" avaliacoes={4} nomeLivro="Livro 2" nomeAutor="Autor 2" precoLivro="R$999.99" />
                <Card imagem="/azulDeitado.png" avaliacoes={5} nomeLivro="Livro 3" nomeAutor="Autor 3" precoLivro="R$999.99" />
                <Card imagem="/azulDeitado.png" avaliacoes={5} nomeLivro="Livro 4" nomeAutor="Autor 4" precoLivro="R$999.99" />
            </Fileira>
            <Fileira>
                <Card imagem="/azulDeitado.png" avaliacoes={4} nomeLivro="Livro 5" nomeAutor="Autor 5" precoLivro="R$999.99" />
                <Card imagem="/azulDeitado.png" avaliacoes={4} nomeLivro="Livro 6" nomeAutor="Autor 6" precoLivro="R$999.99" />
                <Card imagem="/azulDeitado.png" avaliacoes={5} nomeLivro="Livro 7" nomeAutor="Autor 7" precoLivro="R$999.99" />
                <Card imagem="/azulDeitado.png" avaliacoes={5} nomeLivro="Livro 8" nomeAutor="Autor 8" precoLivro="R$999.99" />
            </Fileira>
        </Container>
    );
}
