import { Cancelar } from "../profileStyle";
import { ButtonMobile, ContainerButtonMobile, ContainerMobile, ContainerPasswordMobile, ContainerTextMobile, FormDataMobile, InputMobile, SubTitleMobile, TitleMobile } from "./profileMobileStyle";

export default function ProfileMobile() {
  return (
    <>
      <ContainerMobile>
        <ContainerTextMobile>
          <TitleMobile>Seus Dados</TitleMobile>
        </ContainerTextMobile>
        <FormDataMobile>
            <div>
                <SubTitleMobile>Primeiro Nome</SubTitleMobile>
                <InputMobile type="text" />
            </div>
            <div>
                <SubTitleMobile>Sobrenome</SubTitleMobile>
                <InputMobile type="text" />
            </div>
            <div>
                <SubTitleMobile>E-mail</SubTitleMobile>
                <InputMobile type="text" />
            </div>
            <div>
                <SubTitleMobile>Endereço</SubTitleMobile>
                <InputMobile type="text" />
            </div>
            <ContainerPasswordMobile>
                <SubTitleMobile>Alteração de senha</SubTitleMobile>
                <InputMobile type="password" placeholder="Senha atual" />
                <InputMobile type="password" placeholder="Nova senha" />
                <InputMobile type="password" placeholder="Confirme a nova senha" />
            </ContainerPasswordMobile>
            <ContainerButtonMobile>
                <ButtonMobile>Atualizar</ButtonMobile>
                <Cancelar>Cancelar</Cancelar>
            </ContainerButtonMobile>
        </FormDataMobile>
      </ContainerMobile>
    </>
  );
}
