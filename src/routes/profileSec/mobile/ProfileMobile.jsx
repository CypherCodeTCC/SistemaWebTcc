import { useEffect, useState } from "react";
import { Cancelar } from "../profileStyle";
import {
  ButtonMobile,
  ButtonOptionsMobile,
  ContainerButtonMobile,
  ContainerMobile,
  ContainerOptionsMobile,
  ContainerPasswordMobile,
  ContainerTextMobile,
  FormDataMobile,
  InputMobile,
  SubTitleMobile,
  TitleMobile,
} from "./profileMobileStyle";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ProfileMobile() {
  const uId = localStorage.getItem("uId");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    Nome: "",
    Email: "",
    Telefone: "",
  });

  const [address, setAddress] = useState({
    CEP: "",
    Logradouro: "",
    Numero: "",
    Complemento: "",
    Cidade: "",
    Estado: "",
  });

  const [currentPassword, setCurrentPassword] = useState(""); //SENHA ATUAL
  const [newPassword, setNewPassword] = useState(""); //NOVA SENHA
  const [confirmNewPassword, setConfirmNewPassword] = useState(""); //CONFIRMAÇÃO DA NOVA SENHA
  const [optionColor, setOptionColor] = useState(1);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/client/${localStorage.getItem(
            "userId"
          )}`
        );
        setUser(res.data);
      } catch (err) {
        console.log("Erro ao encontrar os dados do usuário.", err);
      }
    };
    fetchUser();
  }, []);

  //PEGAR O ENDEREÇO DO USUARIO LOGADO
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/client/address/${localStorage.getItem(
            "userId"
          )}`
        );
        setAddress(res.data);
      } catch (err) {
        console.log("Erro ao encontrar o endereço do usuário.", err);
      }
    };
    fetchAddress();
  }, []);

  const handleChanged = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangedAddress = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    const updatedData = { ...user };

    const isAnyPasswordFilled =
      currentPassword || newPassword || confirmNewPassword;

    //SE ALGUM CAMPO DE SENHA ESTIVER PREENCHIDO
    if (isAnyPasswordFilled) {
      //SE OS CAMPOS DE SENHAS NAO ESTIVEREM PREENCHIDOS, NAO ATUALIZE
      if (!currentPassword || !newPassword || !confirmNewPassword) {
        toast.error("Preencha todos os campos de senha.", {
          closeOnClick: true,
        });
        return;
      }

      //SE A CONFIRMAÇAO DE SENHA NAO BATER, NAO
      if (newPassword !== confirmNewPassword) {
        toast.error("A nova senha e a confirmação não coincidem.", {
          closeOnClick: true,
        });
        return;
      }

      updatedData.currentPassword = currentPassword;
      updatedData.newPassword = newPassword;
    }

    try {
      await axios.put(
        `https://node-routes-mysql.vercel.app/client/${localStorage.getItem("userId")}`,
        updatedData
      );
      toast.success("Dados atualizados com sucesso!", {
        closeOnClick: true,
      });
    } catch (err) {
      toast.error("Senha Incorreta.", {
        closeOnClick: true,
      });
      console.log("Erro ao atualizar os dados do perfil.", err);
    }
  };

  const handleUpdateAddress = async () => {
    try {
      await axios.put(
        `https://node-routes-mysql.vercel.app/client/address/${localStorage.getItem(
          "userId"
        )}`,
        address
      );
      toast.success("Endereço atualizado com sucesso!", {
        closeOnClick: true,
      });
    } catch (err) {
      toast.error("Erro ao atualizar o endereço. Tente novamente mais tarde.", {
        closeOnClick: true,
      });
      console.log("Erro ao atualizar o endereço do usuário");
    }
  };

  const changeOptionColor = (id) => {
    setOptionColor(id);
  };

  const clearCep = () => {
    setAddress((prev) => ({
      ...prev,
      Logradouro: "",
      NomeCid: "",
      Uf: ""
    }));
  };

  const myCallback = (content) => {
    if(!("erro" in content)) {
      setAddress((prev) => ({
        ...prev,
        Logradouro: content.logradouro,
        Cidade: content.localidade,
        Estado: content.uf,
      }));
    }
    else{
      clearCep();
      alert("CEP não encontrado.");
    }
  };

  const searchCep = async (value) => {
    const cep = value.replace(/\D/g, "");

    if(cep !== ""){
      const confirmCep = /^[0-9]{8}$/; 

      if(confirmCep.test(cep)){
        try{
          const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
          const data = await res.json();
          myCallback(data);
        }
        catch(err){
          clearCep();
          console.log("Erro ao buscar CEP.", err);
          alert("Erro ao buscar CEP. Tente novamente.");
        }
      }
      else{
        clearCep();
        alert("Formato do CEP inválido.")
      }
    }
    else clearCep()
  }

  const handleBlur = (e) => {
    const cepValue = e.target.value;
    setAddress((prev) => ({...prev, CEP: cepValue}));
    searchCep(cepValue);
  }

  const renderForm = () => {
    switch (optionColor) {
      case 1:
        return (
          <>
            {!uId ? (
              <FormDataMobile>
                <div>
                  <SubTitleMobile>Nome</SubTitleMobile>
                  <InputMobile
                    type="text"
                    value={user.Nome}
                    name="Nome"
                    onChange={handleChanged}
                  />
                </div>
                <div>
                  <SubTitleMobile>E-mail</SubTitleMobile>
                  <InputMobile
                    type="text"
                    value={user.Email}
                    name="Email"
                    onChange={handleChanged}
                  />
                </div>
                <div>
                  <SubTitleMobile>Telefone</SubTitleMobile>
                  <InputMobile
                    mask="(00) 90000-0000"
                    type="text"
                    value={user.Telefone}
                    name="Telefone"
                    onChange={handleChanged}
                  />
                </div>
                <ContainerPasswordMobile>
                  <SubTitleMobile>Alteração de senha</SubTitleMobile>
                  <InputMobile
                    type="password"
                    placeholder="Senha atual"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <InputMobile
                    type="password"
                    placeholder="Nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <InputMobile
                    type="password"
                    placeholder="Confirme a nova senha"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </ContainerPasswordMobile>
                <ContainerButtonMobile>
                  <ButtonMobile onClick={handleUpdate}>Atualizar</ButtonMobile>
                  <Cancelar onClick={() => navigate("/")}>Cancelar</Cancelar>
                </ContainerButtonMobile>
              </FormDataMobile>
            ) : (
              <FormDataMobile>
                <div>
                  <SubTitleMobile>Nome</SubTitleMobile>
                  <InputMobile
                    type="text"
                    value={user.Nome}
                    name="Nome"
                    onChange={handleChanged}
                  />
                </div>
                <div>
                  <SubTitleMobile>Telefone</SubTitleMobile>
                  <InputMobile
                    mask="(00) 90000-0000"
                    type="text"
                    value={user.Telefone}
                    name="Telefone"
                    onChange={handleChanged}
                  />
                </div>
                <ContainerButtonMobile>
                  <ButtonMobile onClick={handleUpdate}>Atualizar</ButtonMobile>
                  <Cancelar onClick={() => navigate("/")}>Cancelar</Cancelar>
                </ContainerButtonMobile>
              </FormDataMobile>
            )}
          </>
        );
      case 2:
        return (
          <>
            <FormDataMobile>
              <div>
                <SubTitleMobile>Cep</SubTitleMobile>
                <InputMobile
                  mask="00000-000"
                  type="text"
                  name="CEP"
                  value={address.CEP}
                  onChange={handleChangedAddress}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <SubTitleMobile>Logradouro</SubTitleMobile>
                <InputMobile
                  type="text"
                  name="Logradouro"
                  value={address.Logradouro}
                  readOnly
                />
              </div>
              <div>
                <SubTitleMobile>Numero</SubTitleMobile>
                <InputMobile
                  type="text"
                  name="Numero"
                  value={address.Numero}
                  onChange={handleChangedAddress}
                />
              </div>
              <div>
                <SubTitleMobile>Complemento</SubTitleMobile>
                <InputMobile
                  type="text"
                  name="Complemento"
                  value={address.Complemento}
                  onChange={handleChangedAddress}
                />
              </div>
              <div>
                <SubTitleMobile>Cidade</SubTitleMobile>
                <InputMobile
                  type="text"
                  name="Cidade"
                  value={address.Cidade}
                  onChange={handleChangedAddress}
                  readOnly
                />
              </div>
              <div>
                <SubTitleMobile>Estado</SubTitleMobile>
                <InputMobile
                  type="text"
                  name="Estado"
                  value={address.Estado}
                  onChange={handleChangedAddress}
                  readOnly
                />
              </div>
              <ContainerButtonMobile>
                <ButtonMobile onClick={handleUpdateAddress}>
                  Atualizar
                </ButtonMobile>
                <Cancelar onClick={() => navigate("/")}>Cancelar</Cancelar>
              </ContainerButtonMobile>
            </FormDataMobile>
          </>
        );
    }
  };

  return (
    <>
      <ContainerMobile>
        <ContainerTextMobile>
          <TitleMobile>Seus Dados</TitleMobile>
        </ContainerTextMobile>
        <ContainerOptionsMobile>
          <ButtonOptionsMobile
            isActive={optionColor === 1}
            onClick={() => changeOptionColor(1)}
          >
            Meus dados
          </ButtonOptionsMobile>
          <ButtonOptionsMobile
            isActive={optionColor === 2}
            onClick={() => changeOptionColor(2)}
          >
            Meu endereço
          </ButtonOptionsMobile>
        </ContainerOptionsMobile>
        {renderForm()}
      </ContainerMobile>
    </>
  );
}
