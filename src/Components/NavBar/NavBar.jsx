import React from 'react';
// Estilo Css
import './css/navbar.css'
// Components.jsx
import LogoComponent from './NavBar-components/LogoComponent';
import MenuLinks from './NavBar-components/MenuLinks';
import SearchBar from './NavBar-components/SearchBar';
import CartLoginIcons from './NavBar-components/CartLoginIcons';

function Navbar() {
    return (
        <nav className="navbar">
            <LogoComponent />
            <MenuLinks />
            <SearchBar />
            <CartLoginIcons />
        </nav>
    );
}

export default Navbar;
