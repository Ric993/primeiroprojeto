// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Capa do video.png'; // Caminho para a imagem

const Header = () => {
    return (
        <>
            <header id="menu">
                <nav>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/news">Notícias</Link></li>
                        <li><Link to="/videos">Vídeos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </header>
            <div id="logo">
                <Link to="https://www.youtube.com/@ricplay3438" target='_blank'>
                    <img src={logo} alt="Logo do RicPlay" width="900px" />
                </Link>
            </div>
        </>
    );
};

export default Header;
