import { useNavigate } from 'react-router-dom';
import PngCelular from '../../../public/celular.png'
import { Container } from './loginStyle';
import { useState } from 'react';
import axios from 'axios';

export default function Login(){
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleRoutes = (route) => {
        navigate(route);
    }

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8081/client/login", user);
            localStorage.setItem('user', JSON.stringify(user.email))
        }
        catch(err){
            console.log("Erro ao logar o cliente.", err);
        }
    }

    console.log(user);

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
                    <input type="text" placeholder='Ex: meuemail@endereco.com' name='email' onChange={handleChange}/>
                    <h4>Senha</h4>
                    <input type="password" placeholder='Insira sua palavra-passe' name='password' onChange={handleChange}/>
                    <button className='btn-login' onClick={handleSubmit}>Login</button>
                    <p className='center'>Não tem uma conta? <span onClick={() => handleRoutes("/signup")}>Crie sua conta</span></p>
                </div>
            </Container>
        </>
    );
}