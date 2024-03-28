// SearchBar.jsx
import React from 'react';
import SearchIcon from '../../../Images/Svg/search.svg';

function SearchBar() {
    return (
        <section className="navbar-search desktop">
            <div className="custom-input">
                <img src={SearchIcon} alt="Ícone de busca" />
                <input className="input" type="text" placeholder="O que você deseja buscar" />
            </div>
        </section>
    );
}

export default SearchBar;
