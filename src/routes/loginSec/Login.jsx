import { useNavigate } from "react-router-dom";
import PngCelular from "../../../public/celular.png";
import {
  Button,
  ButtonLogin,
  Container,
  ContainerForm,
  ContainerImage,
  Image,
  Input,
  Span,
  SubTitle,
  SubTitleCenter,
} from "./loginStyle";
import { useState } from "react";
import axios from "axios";
import { auth, googleProvider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRoutes = (route) => {
    navigate(route);
  };

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://node-routes-mysql.vercel.app/client/login",
        user
      );
      if (res.data.user) {
        localStorage.setItem("user", res.data.user.Email);
        localStorage.setItem("userId", res.data.user.Id);
        toast.success("Login efetuado com sucesso.", {
          closeOnClick: true,
        });
        handleRoutes("/");
      } else {
        toast.error("Email ou senha inválidos.", {
          closeOnClick: true,
        });
      }
    } catch (err) {
      console.log("Erro ao logar o cliente.", err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userGoogle = result.user;
      const token = await userGoogle.getIdToken();

      const res = await axios.post(
        "https://node-routes-mysql.vercel.app/client/login/auth/google",
        { token }
      );
      if(res.data.Id)
        localStorage.setItem("userId", res.data.Id);
      
      localStorage.setItem("uId", res.data.uid);
      localStorage.setItem(
        "userGoogle",
        JSON.stringify({
          email: userGoogle.email,
          nome: userGoogle.displayName,
        })
      );

      if (localStorage.getItem("uId")) {
        handleRoutes("/");
        console.log("Login bem sucedido");
      } else {
        console.log("Credenciais invalidas.");
      }
    } catch (err) {
      console.log("Erro durante o login.", err);
    }
  };

  return (
    <>
      <Container>
        <ContainerImage>
          <Image src={PngCelular} alt="Imagem de Celular" />
        </ContainerImage>
        <ContainerForm>
          <h3>Seja Bem-Vindo</h3>
          <SubTitle>Faça login na sua conta Liber</SubTitle>
          <Button>Prossiga com a Apple</Button>
          <Button onClick={signInWithGoogle}>Prossiga com o Google</Button>
          <Button>Prossiga com o Facebook</Button>
          <SubTitleCenter>Ou</SubTitleCenter>
          <h4>E-mail</h4>
          <Input
            type="text"
            placeholder="Ex: meuemail@endereco.com"
            name="email"
            onChange={handleChange}
          />
          <h4>Senha</h4>
          <Input
            type="password"
            placeholder="Insira sua palavra-passe"
            name="password"
            onChange={handleChange}
          />
          <ButtonLogin onClick={handleSubmit}>Login</ButtonLogin>
          <SubTitleCenter>
            Não tem uma conta?{" "}
            <Span onClick={() => handleRoutes("/signup")}>Crie sua conta</Span>
          </SubTitleCenter>
        </ContainerForm>
      </Container>
    </>
  );
}
