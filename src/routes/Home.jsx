import Header from "./heroSection/HeroSection.jsx";
import DescSection from "./descSection/DescSection.jsx";
import DestaquesSection from "./destaquesSection/DestaquesSection.jsx";
import CategoriesSection from "./categoriesSec/CategoriesSec.jsx";
import CardsSection from "./cardsSec/CardsSec.jsx";
import DescontosSection from "./descontosSec/Descontos.jsx";
import PublishingSection from "./publishingSec/Publishing.jsx";

export default function Home(){
    return(
        <>
            <Header/>
            <DescSection/>
            <DestaquesSection/>
            <CategoriesSection/>
            <CardsSection/>
            <DescontosSection/>
            <PublishingSection/>
        </>
    );
}