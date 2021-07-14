import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './navegacao.css';
import logo from '../../../assets/img/logo.jpg';
import location from '../../../assets/img/location.svg';
import user from '../../../assets/img/user.svg';
import bag from '../../../assets/img/bag.svg';
import chat from '../../../assets/img/chat.svg';
import share from '../../../assets/img/share.svg';

export default class Navegacao extends Component {
    render() {
        return(
            <header className="navegacao">
                <nav className="navegacao__logo">
                <ul className="navegacao__logo-lista">
                        <li className="logo-lista_links"><img className="logo-lista_img block" src={chat}/></li>
                        <li className="logo-lista_links"><img className="logo-lista_img" src={share}/></li>
                    </ul>
                    <div>
                        <img className="navegacao__logo-img" src={logo}/>
                    </div>
                    <ul className="navegacao__logo-lista">
                        <li className="logo-lista_links"><img className="logo-lista_img" src={location}/></li>
                        <li className="logo-lista_links"><img className="logo-lista_img" src={user}/></li>
                        <li className="logo-lista_links"><img className="logo-lista_img" src={bag}/></li>
                    </ul>
                </nav>
                <ul className="navegacao__lista">
                    <a className="navegacao__lista-link">NOVA COLEÇÃO</a>
                    <a className="navegacao__lista-link">MÁSCARAS</a>
                    <a className="navegacao__lista-link">BOLSAS</a>
                    <a className="navegacao__lista-link">KITS</a>
                </ul>
            </header>
        );
    }
}