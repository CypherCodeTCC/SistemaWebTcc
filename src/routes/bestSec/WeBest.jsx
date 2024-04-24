import PngLibrary from '../../../public/library.png'
import PngVerificado from '../../../public/verificado.png'

export default function WeBest(){
    return(
        <>
            <section>
                <div className="container-image">
                    <img src={PngLibrary} alt='Livraria'/>
                </div>
                <div className="container-text">
                    <h1>O por que somos os <span>melhores?</span></h1>
                    <p>Nossa livrária, diferente das demais, é certificada, segura, confiavel e reconhecida nacionalmente.</p>
                    <div className='content-checked'>
                        <img src={PngVerificado} alt='Circulo de checagem verdadeiro' />
                        <p>Serviço reconhecido por empresas globais</p>
                    </div>
                    <div className='content-checked'>
                        <img src={PngVerificado} alt='Circulo de checagem verdadeiro' />
                        <p>Time competente e esforçado</p>
                    </div>
                    <div className='content-checked'>
                        <img src={PngVerificado} alt='Circulo de checagem verdadeiro' />
                        <p>97% das nossas avaliações são positivas</p>
                    </div>
                    <div className='content-checked'>
                        <img src={PngVerificado} alt='Circulo de checagem verdadeiro' />
                        <p>100% de entregas realizadas sem erros</p>
                    </div>
                </div>
            </section>
        </>
    );
}