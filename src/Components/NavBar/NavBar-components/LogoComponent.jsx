// LogoComponent.jsx
import React from "react";
import logo from "../../../Images/logotipo.png";

function LogoComponent() {
    return (
        <div className="logo desktop">
            <img src={logo} alt="Logotipo da empresa" />
        </div>
    );
}

export default LogoComponent;
