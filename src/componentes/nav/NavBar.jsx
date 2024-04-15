// Estilo Css
import "./css/navbar.css";
// Components.jsx
import LogoComponent from "./NavBar-components/LogoComponent.js";
import MenuLinks from "./NavBar-components/MenuLinks.js";
import CartLoginIcons from "./NavBar-components/CartLoginIcons.js";
import MenuMobile from "./NavBar-components/MobileMenu.js";

function Navbar() {
    return (
        <>
            <nav className="navbar">                
                <LogoComponent />
                <MenuLinks />
                <CartLoginIcons />
                <MenuMobile />
            </nav>
        </>
    );
}

export default Navbar;
