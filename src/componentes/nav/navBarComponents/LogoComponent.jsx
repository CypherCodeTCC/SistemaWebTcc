// LogoComponent.jsx
import logo from "../../../../public/logotipo.png";
import { useNavigate } from "react-router-dom";


function LogoComponent() {
    const navigate = useNavigate();

    return (
        <div className="logo" onClick={() => navigate('/')}>
            <img src={logo} alt="Logotipo da empresa"/>
        </div>
    );
}

export default LogoComponent;
