import React from 'react';
import { Component } from 'react';

import portaCarregador from '../../../../assets/img/mockPortaCarregador.png';
import kitPretoMarrom from '../../../../assets/img/mockKitPretoMarrom.png';
import kitColorido from '../../../../assets/img/mockKitColorido.png';
import mascaraColorida from '../../../../assets/img/mockMaskColorida.png';
import mascaraAzul from '../../../../assets/img/mockMaskAzul.png';
import mascaraRosa from '../../../../assets/img/mockMaskRosa.png';
import portaCanudos from '../../../../assets/img/portaCanudos.png';
import portaMascaras from '../../../../assets/img/portaMascaras.jpg';
import bolsaAzul from '../../../../assets/img/bolsaAzul.png';

import './_conteudoCardProdutos.css';
import '../../_cores.css';

export default class ConteudoCardProdutos extends Component {
    render() {
        return(
            <section className='conteudoCardProdutos'>
                <h1 className='cardProdutos-titulo'>PRODUTOS EM DESTAQUE</h1>
                <div className='cardsContainer'>
                    <div className='cards'>
                        <img className='cards__img' src={bolsaAzul} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Bolsa azul de bolinhas brancas</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='cards__img' src={kitColorido} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Kit bolsa térmica colorida</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='cards__img' src={portaCarregador} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Bolsa azul de bolinhas brancas</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='cards__img' src={portaCanudos} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Porta canudos</p>
                        </div>
                    </div>
                </div>
                <div className='cardsContainer'>
                   <div className='cards'>
                        <img className='cards__img' src={kitPretoMarrom} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Kit porta escovas-de-dente</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='cards__img' src={portaMascaras} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Porta máscaras</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='cards__img' src={mascaraRosa} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Máscara rosa</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='cards__img' src={mascaraColorida} alt="" />
                        <div className='cards__descricao'>
                            <h3 className='descricao-titulo'>Produtos em destaque</h3>
                            <div className='precos'>
                                <span className='preco-antigo'>R$49,99</span>
                                <div className='preco-novo-container'>
                                    <span className='preco-novo'>R$39,99</span>
                                    <p className='preco-novo-par'>26% off</p>
                                </div>
                            </div>
                            <p className='nome-produto'>Máscara colorida</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}