// LogoComponent.jsx
import React from "react";
import logo from "../../../../public/logotipo.png";


function LogoComponent() {
    return (
        <div className="logo">
            <img src={logo} alt="Logotipo da empresa" />
        </div>
    );
}

export default LogoComponent;