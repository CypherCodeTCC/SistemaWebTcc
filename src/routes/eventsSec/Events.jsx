import { useEffect, useState } from "react";
import PngBienal from "../../../public/bienal.png";
import PngFlip from "../../../public/flip.png";
import PngFrankfurt from "../../../public/frankfurt.png";
import { Carousel, CarouselInner, CarouselItem, Container, ContainerTitle, Description, Details, Image, Indicator, IndicatorContainer, Title } from "./eventsStyle";

export default function Events() {
  const [currentImage, setCurrentImage] = useState(0); // Estado da imagem atual
  const [showDetails, setShowDetails] = useState(false); // Estado para controlar se os detalhes estão visíveis
  const images = [PngBienal, PngFlip, PngFrankfurt];
  const eventDetails = [
    {
      title: 'Bienal do Livro',
      description: "A maior feira literária do Brasil, realizada no Rio de Janeiro.",
    },
    {
      title: 'FLIP',
      description: "Festa Literária Internacional de Paraty, famosa por reunir escritores nacionais e internacionais.",
    },
    {
      title: 'Feira de Frankfurt',
      description: 'Maior feira de livros do mundo, realizada anualmente na Alemanha.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar o índice ativo dos indicadores


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        setActiveIndex(newIndex);
        return newIndex;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length])

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleIndicatorClick = (index) => {
    setCurrentImage(index);
    setActiveIndex(index);
    setShowDetails(false);
  }

  return (
    <>
      <Container>
        <ContainerTitle>
        <p>Eventos que a Liber participou</p>
        </ContainerTitle>
    
        <Carousel>
          <CarouselInner style={{ 
            transform: `translateX(-${currentImage * 100}%)`,
            transition: "transform 0.5s ease", 
          }}>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image src={image} alt={`Evento ${index + 1}`} onClick={toggleDetails} />
                {showDetails && currentImage === index && (
                  <Details className="show" onClick={toggleDetails}>
                    <Title>{eventDetails[index].title}</Title>
                    <Description>{eventDetails[index].description}</Description>
                  </Details>
                )}
              </CarouselItem>
            ))}
          </CarouselInner>
        </Carousel>
        <IndicatorContainer>
          {images.map((image, index) => (
            <Indicator 
              key={index}
              active={activeIndex === index}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </IndicatorContainer>
      </Container>
    </>
  );
}