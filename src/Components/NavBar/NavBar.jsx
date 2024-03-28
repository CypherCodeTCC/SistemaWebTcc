// Estilo Css
import "./css/navbar.css";
// Components.jsx
import LogoComponent from "./NavBar-components/LogoComponent";
import MenuLinks from "./NavBar-components/MenuLinks";
import CartLoginIcons from "./NavBar-components/CartLoginIcons";
import MenuMobile from "./NavBar-components/MobileMenu.jsx";

function Navbar() {
    return (
        <>
            <nav className="navbar">                
                <LogoComponent />
                <MenuLinks />
                <CartLoginIcons />
            </nav>
        </>
    );
}

export default Navbar;
