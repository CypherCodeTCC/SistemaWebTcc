import {
  Container,
  ContainerImage,
  ContainerText,
  ContentChecked,
  Image,
  ImageLibrary,
  Span,
  Title,
} from "./weBestStyle";

import PngLibrary from "../../../public/library.png";
import PngVerificado from "../../../public/verificado.png";

export default function WeBest() {
  return (
    <>
      <Container>
        <ContainerImage>
          <ImageLibrary src={PngLibrary} alt="Livraria" />
        </ContainerImage>
        <ContainerText>
          <Title>
            O por que somos os <Span>melhores?</Span>
          </Title>
          <p>
            Nossa livrária, diferente das demais, é certificada, segura,
            confiavel e reconhecida nacionalmente.
          </p>
          <ContentChecked>
            <Image src={PngVerificado} alt="Circulo de checagem verdadeiro" />
            <p>Serviço reconhecido por empresas globais</p>
          </ContentChecked>
          <ContentChecked>
            <Image src={PngVerificado} alt="Circulo de checagem verdadeiro" />
            <p>Time competente e esforçado</p>
          </ContentChecked>
          <ContentChecked>
            <Image src={PngVerificado} alt="Circulo de checagem verdadeiro" />
            <p>97% das nossas avaliações são positivas</p>
          </ContentChecked>
          <ContentChecked>
            <Image src={PngVerificado} alt="Circulo de checagem verdadeiro" />
            <p>100% de entregas realizadas sem erros</p>
          </ContentChecked>
        </ContainerText>
      </Container>
    </>
  );
}
