import React from 'react';
import { Component } from 'react';

import mockupMascara from '../../../../assets/img/img_13.jpg';

import './_conteudoPromocoes.css';
import '../../_cores.css';


export default class ConteudoPromocoes extends Component {
    render() {
        return(
            <section className='conteudoPromocoes'>
                <div className='conteudoPromocoes-banner'>
                    <div className='banner-00'>
                        <h2 className='banner-00-titulo'>30% OFF</h2>
                        <p className='banner-00-descricao'>Na compra de qualquer kits de nossa coleção</p>
                        <a className='banner-00-btn' href="">Saiba mais</a>
                        
                    </div>
                    <div className='banner-01'>
                        
                    </div>
                    <img className='banner-img' src={mockupMascara} alt="" />
                </div>
            </section>
        );
    }
}