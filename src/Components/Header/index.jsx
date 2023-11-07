import React from "react";
import Logo from '../../assets/img/Logo.svg'
import lupa from '../../assets/img/lupa.svg'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">

            <div className="logo-buscador">
                <div class="logo">
                    <Link to={'/'}>
                        <img src={Logo} alt="Logo de alurageek" />
                    </Link>
                    
                </div>
                <div class="buscador">
                    <input id="search" type="text" placeholder="¿Que deseas buscar?"/>
                    <button id="btn-search"><img src={lupa} alt="cono de buscar (Lupa)"/></button>
                </div>
            </div>
            <div class="login">
                <button id="login">Login</button>
                <button id="logut">Logout</button>
            </div>

        </header>
    )
}

export default Header;