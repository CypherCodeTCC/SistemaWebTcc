import './destaquessection.css';

function DestaquesSection() {
    return (
        <section className='destaques-container'>
            {/* Seção de Destaques */}
            <div className='titulo-links-destaques'>
                {/* Título da Seção de Destaques */}
                <div className='titulo-container-destaques'>
                    <h2 className='titulo-destaques'>Destaques</h2>
                </div>
                {/* Abas de Navegação */}
                <div className="abas">
                    <ul className="abas-lista" role="tablist">
                        {/* Aba: Novidades */}
                        <li className="aba-item aba-item-ativa">
                            <button className="aba-titulo">
                                Novidades
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex-container">
                <div className='produtoPrincipal-flex-container'>
                <div class="flex-items"><h1>A</h1></div>
                </div>
                <div class="colunasMenores-flex-container">
                    <div class="primeiraColuna-flex-container">
                        <div class="flex-items"><h1>1</h1></div>
                        <div class="flex-items"><h1>2</h1></div>
                    </div>
                    <div class="segundaColuna-flex-container">
                        <div class="flex-items"><h1>3</h1></div>
                        <div class="flex-items"><h1>4</h1></div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default DestaquesSection;

/* imagem central a esquerda = 638px de width e height, as outras 4 a direita tem 293 de height e width, padding: 0vw 1.66666667vw 1.66666667vw 0vw;*/