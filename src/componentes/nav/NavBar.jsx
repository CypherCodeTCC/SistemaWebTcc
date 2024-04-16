// Estilo Css
import "./css/navbar.css";
// Components.jsx
import LogoComponent from "./navBarComponents/LogoComponent.jsx";
import MenuLinks from "./navBarComponents/MenuLinks.jsx";
import CartLoginIcons from "./navBarComponents/CartLoginIcons.jsx";
import MenuMobile from "./navBarComponents/MobileMenu.jsx";

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
