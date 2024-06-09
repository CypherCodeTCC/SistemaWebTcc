import React from "react";
import {
  ContainerDesc,
  ContentDesc,
  DescIcon,
  SectionDesc,
  TitleDesc,
  SpanDesc,
  LeftDesc,
  CenterDesc,
  RightDesc,
  DescP,
  DescH2,
  DescImg,
} from "./DescSectionStyle.jsx";
import SvgCaminhao from "../../../public/caminhao.svg";
import SvgCaixas from "../../../public/caixas.svg";
import SvgPessoas from "../../../public/pessoas.svg";

export default function DescSection() {
  const descriptions = [
    { id: 1, title: "Entrega Segura", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, title: "Variedade Imensa", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, title: "Você no", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <>
      <ContainerDesc>
        {/* Container with background gradient and padding */}
        <TitleDesc>
          O que nos torna <SpanDesc>especiais?</SpanDesc>
          {/* Title with inter font and special highlighted word */}
        </TitleDesc>
        <ContentDesc>
          {/* Animated content section with flexbox */}
          <SectionDesc>
            <LeftDesc>
              <DescIcon>
                <DescImg src={SvgCaminhao} alt="Caminhão de entrega" />
                {/* Delivery truck icon */}
              </DescIcon>
              <DescH2>{descriptions[0].title}</DescH2>
              {/* Section title with Poppins font */}
              <DescP>{descriptions[0].desc}</DescP>
              {/* Section description with Poppins font */}
            </LeftDesc>
          </SectionDesc>
          <SectionDesc>
            <CenterDesc>
              <DescIcon>
                <DescImg src={SvgCaixas} alt="Três caixas" />
                {/* Three boxes icon */}
              </DescIcon>
              <DescH2>{descriptions[1].title}</DescH2>
              <DescP>{descriptions[1].desc}</DescP>
            </CenterDesc>
          </SectionDesc>
          <SectionDesc>
            <RightDesc>
              <DescIcon>
                <DescImg src={SvgPessoas} alt="Três pessoas" />
                {/* Three people icon */}
              </DescIcon>
              <DescH2>
                {descriptions[2].title} <SpanDesc>Foco</SpanDesc>
                {/* Section title with highlighted focus word */}
              </DescH2>
              <DescP>{descriptions[2].desc}</DescP>
            </RightDesc>
          </SectionDesc>
        </ContentDesc>
      </ContainerDesc>
    </>
  );
}
