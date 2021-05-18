import React, { Component } from 'react';
import './secoes/navegacao/navegacao.css'
import logo from '../assets/img/logo.jpg';

export default class Navegacao extends Component {
    render() {
        return(
            <header className="navegacao">
                <nav className="navegacao__logo">
                    <img className="navegacao__logo-img" src={logo}/>
                </nav>
                <ul className="navegacao__lista">
                    <a className="navegacao__lista-link">Sobre nós</a>
                    <a className="navegacao__lista-link">Categorias</a>
                    <a className="navegacao__lista-link">Ofertas</a>
                    <a className="navegacao__lista-link">Contato</a>
                </ul>
            </header>
        );
    }
}