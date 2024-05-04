import PngCelular from '../../../public/celular.png'
import { Container } from './signUpStyle';


export default function SignUp() {
    return (
        <>
            <Container>
                <div className='container-image'>
                    <img src={PngCelular} alt="Imagem de Celular" />
                </div>
                <div className='container-form'>
                    <h2>Registre-se</h2>
                    <p>Crie a sua própria conta Liber e tenha acesso a inúmeros benefícios</p>
                    <div className='input-text'>
                        <h4>Primeiro Nome</h4>
                        <input type="text" placeholder='Ex: Juan' />
                    </div>
                    <div className='input-text'>
                        <h4>Sobrenome</h4>
                        <input type="text" placeholder='Ex: Feitosa' />
                    </div>
                    <div className='input-text'>
                        <h4>CPF</h4>
                        <input type="text" placeholder='Ex: 12345678911' />
                    </div>
                    <div className='input-text'>
                        <h4>Telefone</h4>
                        <input type="tel" placeholder='Ex: (11) 99999-9999'/>
                    </div>
                    <div className='input-email'>
                        <h4>Seu E-mail</h4>
                        <input type="email" placeholder='Ex: meuemail@endereco.com' />
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>CEP</h4>
                        <input type="text" />
                    </div>
                    <div className='input-text input-address'>
                        <h4>Logradouro</h4>
                        <input type="text" />
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>Número</h4>
                        <input type="text" />
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>Complem.</h4>
                        <input type="text" />
                    </div>
                    <div className='input-text input-city'>
                        <h4>Cidade</h4>
                        <input type="text" />
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>UF</h4>
                        <input type="text" />
                    </div>
                    <div className='input-text'>
                        <h4>Senha</h4>
                        <input type="password" placeholder='Insira uma palavra-passe' />
                    </div>
                    <div className='input-text'>
                        <h4>Confirme a Senha</h4>
                        <input type="password" placeholder='Confirme a senha' />
                    </div>
                    <div className='input-checkbox'>
                        <input type="checkbox" />
                        <p>Ao criar uma conta, você concorda com nossos <span>Termos & Condições</span></p>
                    </div>
                    <button>Registre-se</button>
                </div>
            </Container>
        </>
    );
}