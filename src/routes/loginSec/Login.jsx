import { useNavigate } from 'react-router-dom';
import PngCelular from '../../../public/celular.png'
import { Container } from './loginStyle';

export default function Login(){
    const navigate = useNavigate();

    const handleRoutes = (route) => {
        navigate(route);
    }

    return(
        <>
            <Container>
                <div className='container-image'>
                    <img src={PngCelular} alt="Imagem de Celular" />
                </div>
                <div className='container-form'>
                    <h3>Seja Bem-Vindo</h3>
                    <p>Faça login na sua conta Liber</p>
                    <button>Prossiga com a Apple</button>
                    <button>Prossiga com o Google</button>
                    <button>Prossiga com o Facebook</button>
                    <p className='center'>Ou</p>
                    <h4>E-mail</h4>
                    <input type="text" placeholder='Ex: meuemail@endereco.com'/>
                    <h4>Senha</h4>
                    <input type="password" placeholder='Insira sua palavra-passe' />
                    <button className='btn-login'>Login</button>
                    <p className='center'>Não tem uma conta? <span onClick={() => handleRoutes("/signup")}>Crie sua conta</span></p>
                </div>
            </Container>
        </>
    );
}