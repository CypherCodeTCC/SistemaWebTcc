import { useState } from "react";
import {
  ButtonMobile,
  ContainerButtonMobile,
  ContainerMobile,
  ContainerTextMobile,
  InputMobile,
  SubTitleMobile,
  TitleMobile,
} from "../profileSec/mobile/profileMobileStyle";
import { Cancelar } from "../profileSec/profileStyle";
import { ContainerInputs, FormData } from "./finalizeRegisterStyle";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FinalizeRegister() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({
    CPF: "",
    Nome: userData.nome,
    Email: userData.email,
    Telefone: "",
    CEP: "",
    Logradouro: "",
    Uf: "",
    NomeCid: "",
    NumeroEnd: "",
    Complemento: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://node-routes-mysql.vercel.app/client", user);
      console.log(res.data);
      if(res.data.user){
        localStorage.setItem("userId", res.data.user.Id);
        toast.success("Cadastro realizado com sucesso!", {
          closeOnClick: true,
        });
        navigate('/');
        console.log("Cadastro realizado com sucesso!");
      }
      else{
        toast.error("Ocorreu um erro. Contate ao administrador.")
      }
    } catch (err) {
      toast.error("Erro ao cadastrar os dados. Tente novamente mais tarde.");
      console.log("Erro ao cadastrar os dados.", err);
    }
  };

  return (
    <>
      <ContainerMobile>
        <ContainerTextMobile>
          <TitleMobile>Registre suas Informações</TitleMobile>
        </ContainerTextMobile>
        <FormData>
          <ContainerInputs>
            <SubTitleMobile>CPF</SubTitleMobile>
            <InputMobile type="text" name="CPF" onChange={handleChange} />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Telefone</SubTitleMobile>
            <InputMobile type="text" name="Telefone" onChange={handleChange} />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Cep</SubTitleMobile>
            <InputMobile type="text" name="CEP" onChange={handleChange} />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Logradouro</SubTitleMobile>
            <InputMobile
              type="text"
              name="Logradouro"
              onChange={handleChange}
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Numero</SubTitleMobile>
            <InputMobile type="text" name="NumeroEnd" onChange={handleChange} />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Complemento</SubTitleMobile>
            <InputMobile
              type="text"
              name="Complemento"
              onChange={handleChange}
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Cidade</SubTitleMobile>
            <InputMobile type="text" name="NomeCid" onChange={handleChange} />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Estado</SubTitleMobile>
            <InputMobile type="text" name="Uf" onChange={handleChange} />
          </ContainerInputs>
          <ContainerButtonMobile>
            <ButtonMobile onClick={handleSubmit}>Cadastrar</ButtonMobile>
            <Cancelar>Cancelar</Cancelar>
          </ContainerButtonMobile>
        </FormData>
      </ContainerMobile>
    </>
  );
}
